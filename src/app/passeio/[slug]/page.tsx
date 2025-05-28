import TourPageClient from './TourPageClient';

type Props = {
  params: {
    slug: string;
  };
};

export default async function TourPage({ params }: Props) {
  const { slug } = params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/tours?filters[slug]=${slug}&populate=images`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    throw new Error('Falha ao buscar dados do passeio');
  }

  const data = await res.json();
  const tour = data.data[0];

  if (!tour) {
    throw new Error('Passeio não encontrado');
  }

  return <TourPageClient tour={tour} />;
}
