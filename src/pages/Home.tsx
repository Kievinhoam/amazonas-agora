import NewsCard from "../components/NewsCard";
import { noticias } from "../data/news";



function Home() {
  return (
    <>
      <section className="container hero-section">
        <article className="hero">
          <img src={noticias[0].imagem} alt={noticias[0].titulo} />

          <div className="hero-overlay">
            <span>{noticias[0].categoria}</span>
            <h1>{noticias[0].titulo}</h1>
            <p>Conteúdo demonstrativo do portal Amazonas Agora.</p>
          </div>
        </article>

        <div className="side-news">
          {noticias.slice(1).map((noticia) => (
            <article className="side-card" key={noticia.titulo}>
              <img src={noticia.imagem} alt={noticia.titulo} />

              <div>
                <span>{noticia.categoria}</span>
                <h2>{noticia.titulo}</h2>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="section-title">
          <h2>Últimas notícias</h2>
          <a href="#">Ver todas →</a>
        </div>

        <div className="news-grid">
          {noticias.map((noticia) => (
            <NewsCard
              key={noticia.titulo}
              categoria={noticia.categoria}
              titulo={noticia.titulo}
              imagem={noticia.imagem}
              descricao="Conteúdo demonstrativo para a primeira versão do portal."
            />
          ))}
        </div>
      </section>

      <section className="newsletter">
        <div className="container newsletter-content">
          <div>
            <span>NEWSLETTER</span>
            <h2>Receba as principais notícias do Amazonas.</h2>
          </div>

          <form>
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              aria-label="Seu melhor e-mail"
            />

            <button type="submit">Quero receber</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Home;