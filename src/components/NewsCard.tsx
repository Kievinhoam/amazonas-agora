type NewsCardProps = {
  categoria: string;
  titulo: string;
  imagem: string;
  descricao?: string;
};

function NewsCard({
  categoria,
  titulo,
  imagem,
  descricao,
}: NewsCardProps) {
  return (
    <article className="news-card">
      <img src={imagem} alt={titulo} />

      <div className="news-card-content">
        <span>{categoria}</span>

        <h3>{titulo}</h3>

        {descricao && <p>{descricao}</p>}
      </div>
    </article>
  );
}

export default NewsCard;