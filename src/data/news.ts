export type Noticia = {
  id: number;
  categoria: string;
  titulo: string;
  imagem: string;
  descricao: string;
};

export const noticias: Noticia[] = [
  {
    id: 1,
    categoria: "MANAUS",
    titulo: "Manaus recebe novas ações de infraestrutura nesta semana",
    imagem:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80",
    descricao:
      "Conteúdo demonstrativo para a primeira versão do portal Amazonas Agora.",
  },
  {
    id: 2,
    categoria: "AMAZONAS",
    titulo: "Novidades movimentam o interior do Amazonas",
    imagem:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    descricao:
      "Conteúdo demonstrativo para a primeira versão do portal Amazonas Agora.",
  },
  {
    id: 3,
    categoria: "ESPORTES",
    titulo: "Esporte amazonense ganha destaque neste fim de semana",
    imagem:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
    descricao:
      "Conteúdo demonstrativo para a primeira versão do portal Amazonas Agora.",
  },
];