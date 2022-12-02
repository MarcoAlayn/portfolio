import "./App.css";
import logo from "./assets/logo.png";
import profile from "./assets/profile.png";
import TechCard from "./components/TechCard";
import html from "./assets/logos/1.png";
import css from "./assets/logos/2.png";
import js from "./assets/logos/3.png";
import react from "./assets/logos/4.png";
import redux from "./assets/logos/5.png";
import github from "./assets/logos/6.png";
import npm from "./assets/logos/7.png";
import photoshop from "./assets/logos/8.png";
import figma from "./assets/logos/9.png";

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

      <section className="tecnologies margin">
        <h3 className="h3">tecnologias que utilizo</h3>
        <div className="containerRow ">
          <TechCard name={"html"} img={html} />
          <TechCard name={"css"} img={css} />
          <TechCard name={"javascript"} img={js} />
          <TechCard name={"react"} img={react} />
          <TechCard name={"redux"} img={redux} />
          <TechCard name={"github"} img={github} />
          <TechCard name={"npm"} img={npm} />
          <TechCard name={"figma"} img={figma} />
          <TechCard name={"photoshop"} img={photoshop} />
        </div>
      </section>
      <sections className="experience">experiencia</sections>
      <section className="contact">contactame</section>
      <footer className="footer">footer</footer>
    </div>
  );
}

export default App;
