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
  const strapiUrl = process.env.STRAPI_API_URL;

  if (!siteUrl) {
    console.error('Erro: NEXT_PUBLIC_URL não está definida');
    return NextResponse.json(
      { error: 'NEXT_PUBLIC_URL não configurada no .env.local' },
      { status: 500 }
    );
  }

  try {
    // Cria reserva no Strapi
    const reservaRes = await fetch(`${strapiUrl}/api/reservas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      body: JSON.stringify({
        data: {
          name,
          email,
          phone,
          date,
          quantity,
          estado: 'pendente', // <-- Confirme se 'pendente' é um valor válido no enum!
          tour: tourId,
        },
      }),
    });

    const reservaData = await reservaRes.json();

    if (!reservaRes.ok) {
      console.error('Erro ao criar reserva no Strapi:', reservaData);
      return NextResponse.json(
        { error: 'Erro ao criar reserva no Strapi', details: reservaData },
        { status: 500 }
      );
    }

    const reservaId = reservaData.data.id;

    // Cria preferência no Mercado Pago
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
          success: `${siteUrl}/success`,
          failure: `${siteUrl}/failure`,
          pending: `${siteUrl}/pending`,
        },
        metadata: {
          reservaId,
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
