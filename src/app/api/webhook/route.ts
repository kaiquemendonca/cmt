import { NextResponse } from 'next/server';
import { MercadoPagoConfig, Payment } from 'mercadopago';

const mercadopagoClient = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN as string,
});

export async function POST(req: Request) {
  const body = await req.json();

  if (body.type === 'payment') {
    const paymentId = body.data.id;

    try {
      const payment = await new Payment(mercadopagoClient).get({ id: paymentId });
      const status = payment.status; // approved, pending, rejected
      const metadata = payment.metadata;
      const reservaId = metadata.reservaId;

      const estado =
        status === 'approved'
          ? 'pago'
          : status === 'pending'
          ? 'pendente'
          : 'cancelado';

      console.log('Pagamento recebido:', {
        paymentId,
        status,
        metadata,
      });

      // 🔸 Atualiza a reserva existente no Strapi
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/reservas/${reservaId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
          },
          body: JSON.stringify({
            data: {
              estado: estado,
              documentId: paymentId, // ID do pagamento no Mercado Pago
            },
          }),
        }
      );

      if (!res.ok) {
        console.error('Erro ao atualizar a reserva no Strapi', await res.text());
      }

      return NextResponse.json({ received: true });
    } catch (error) {
      console.error('Erro no webhook:', error);
      return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
    }
  }

  return NextResponse.json({ message: 'Evento ignorado' });
  
}
