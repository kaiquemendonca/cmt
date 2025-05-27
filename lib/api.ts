const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

/**
 * Função genérica para buscar dados da API do Strapi
 * @param path Caminho da API (ex.: '/api/tours?populate=*')
 * @returns Dados da API tipados
 */
export async function fetchAPI<T>(path: string): Promise<T> {
  const url = `${API_URL}${path.startsWith('/') ? '' : '/'}${path}`;

  const res = await fetch(url);

  if (!res.ok) {
    const error = await res.text();
    console.error(`Erro ${res.status}: ${error}`);
    throw new Error(`Erro na requisição: ${res.status}`);
  }

  const data: T = await res.json();
  return data;
}
