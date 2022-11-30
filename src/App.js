import "./App.css";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div id="containerRow">
          <img src={logo} alt="logo" className="logo" />
          <nav className="navbar">
            <a href="/" className="link">
              inicio
            </a>
            <a href="/" className="link">
              sobre mi
            </a>
            <a href="/" className="link">
              tecnologías
            </a>
            <a href="/" className="link">
              experiencia
            </a>
            <a href="/" className="link">
              contacto
            </a>
          </nav>
        </div>

        <div className="text">
          <div id="containerColumn">
            <h1>
              Hola, Me llamo <br /> <span>Marco</span> y soy <br />
              <span> Frontend Developer </span>
            </h1>
            <p>Bienvenid@ a mi portafolio</p>
            <div id="containerRow" className="buttons ">
              <a href="/">Descargar CV</a>
              <a href="/">Contactame</a>
            </div>
          </div>
        </div>
      </header>

      <section className="about">sobre mi</section>
      <section className="tecnologies">tecnologies</section>
      <sections className="experience">experiencia</sections>
      <section className="contact">contactame</section>
      <footer className="footer">footer</footer>
    </div>
  );
}

export default App;
