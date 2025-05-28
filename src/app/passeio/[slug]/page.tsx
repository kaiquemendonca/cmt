import React from 'react';
import TourPageClient from './TourPageClient';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { slug: string } }) {
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
    notFound();
  }

  return <TourPageClient tour={tour} />;
}
