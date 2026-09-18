function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <span>AMAZONAS</span>
          <strong>AGORA</strong>
        </div>

        <button className="menu-button" aria-label="Abrir menu">
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;