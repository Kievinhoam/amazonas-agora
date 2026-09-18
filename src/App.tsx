import "./App.css";

const noticias = [
  {
    categoria: "MANAUS",
    titulo: "Manaus recebe novas ações de infraestrutura nesta semana",
    imagem:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    categoria: "AMAZONAS",
    titulo: "Novidades movimentam o interior do Amazonas",
    imagem:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
  },
  {
    categoria: "ESPORTES",
    titulo: "Esporte amazonense ganha destaque neste fim de semana",
    imagem:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
  },
];

function App() {
  return (
    <div className="site">
      <header className="header">
        <div className="container header-content">
          <div className="logo">
            <span>AMAZONAS</span>
            <strong>AGORA</strong>
          </div>

          <button className="menu-button">☰</button>
        </div>
      </header>

      <nav className="nav">
        <div className="container nav-content">
          <a href="#">Manaus</a>
          <a href="#">Amazonas</a>
          <a href="#">Política</a>
          <a href="#">Economia</a>
          <a href="#">Segurança</a>
          <a href="#">Esportes</a>
          <a href="#">Cultura</a>
          <a href="#">Mais</a>
        </div>
      </nav>

      <main>
        <section className="breaking">
          <div className="container breaking-content">
            <span className="breaking-label">ÚLTIMAS</span>
            <p>
              Acompanhe as principais notícias de Manaus e do Amazonas
            </p>
          </div>
        </section>

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
              <article className="news-card" key={noticia.titulo}>
                <img src={noticia.imagem} alt={noticia.titulo} />

                <div className="news-card-content">
                  <span>{noticia.categoria}</span>
                  <h3>{noticia.titulo}</h3>
                  <p>
                    Conteúdo demonstrativo para a primeira versão do portal.
                  </p>
                </div>
              </article>
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
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-logo">
            <span>AMAZONAS</span>
            <strong>AGORA</strong>
          </div>

          <p>
            Portal de notícias de Manaus e do Amazonas.
          </p>

          <small>
            © 2026 Amazonas Agora — Conteúdo demonstrativo.
          </small>
        </div>
      </footer>
    </div>
  );
}

export default App;