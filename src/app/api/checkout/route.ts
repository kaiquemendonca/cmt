import { NextResponse } from 'next/server';
import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN as string,
});

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, phone, date, quantity, tourId, tourName, price } = body;

  const totalPrice = price;

  const siteUrl = process.env.NEXT_PUBLIC_URL;

  if (!siteUrl) {
    console.error('Erro: NEXT_PUBLIC_URL não está definida');
    return NextResponse.json(
      { error: 'NEXT_PUBLIC_URL não configurada no .env.local' },
      { status: 500 }
    );
  }

  console.log('NEXT_PUBLIC_URL:', siteUrl);

  try {
    const preference = await new Preference(client).create({
      body: {
        items: [
          {
            id: String(tourId),
            title: tourName,
            quantity: 1,
            currency_id: 'BRL',
            unit_price: totalPrice,
          },
        ],
        payer: {
          name: name,
          email: email,
          phone: {
            area_code: '',
            number: phone.replace(/\D/g, ''),
          },
        },
        back_urls: {
          success: `${process.env.SITE_URL}/success`,
          failure: `${process.env.SITE_URL}/failure`,
          pending: `${process.env.SITE_URL}/pending`,
        },
        

        metadata: {
          tourId,
          date,
          quantity,
          customer: name,
          customerEmail: email,
          customerPhone: phone,
        },
      },
    });

    return NextResponse.json({ url: preference.init_point });
  } catch (error) {
    console.error('Erro na criação da preferência Mercado Pago:', error);
    return NextResponse.json(
      { error: 'Erro ao criar a preferência de pagamento' },
      { status: 500 }
    );
  }
}
