import "./App.css";
import logo from "./assets/logo.png";
import profile from "./assets/profile.png";

function App() {
  return (
    <div className="app ">
      <header className="header">
        <div className="margin">
          <div className="containerRow ">
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
            <div className="containerColumn">
              <h1>
                Hola, Me llamo <br /> <span>Marco</span> y soy <br />
                <span> Frontend Developer </span>
              </h1>
              <p>Bienvenid@ a mi portafolio</p>
              <div className="btn containerRow margin">
                <a href="/">Descargar CV</a>
                <a href="/">Contactame</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="about containerColumn">
        <div className="containerRow margin">
          <div className="profile containerColumn">
            <img src={profile} alt="profile" />
          </div>
          <div className="aboutText containerColumn">
            <h2 className="h2">sobre mi</h2>
            <p>
              Desarrollador Full Stack, especializado en el desarrollo de
              interfaces de usuario y experiencias de usuario en general. <br />
              Me gusta trabajar en estrecha colaboración con diseñadores y otros
              desarrolladores web para crear sitios y aplicaciones web modernas
              y atractivas. <br />
              Me apasiona el aprendizaje constante, la implementación de las
              soluciones de tecnología en la vida cotidiana y el crecimiento de
              las compañías a través de la digitalización de los procesos.{" "}
              Ademas, me gusta mantenerme al día con las últimas tendencias en
              web design y desarrollo web.
            </p>
          </div>
        </div>
      </section>

      <section className="tecnologies containerColumn">tecnologies</section>
      <sections className="experience">experiencia</sections>
      <section className="contact">contactame</section>
      <footer className="footer">footer</footer>
    </div>
  );
}

export default App;
