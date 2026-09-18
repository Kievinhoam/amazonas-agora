import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import BreakingNews from "./components/BreakingNews";
import NewsCard from "./components/NewsCard";
import Footer from "./components/Footer";

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
      <Header />

      <Navbar />

      <main>
        <BreakingNews />

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
      </main>

    <Footer />
    </div>
  );
}

export default App;