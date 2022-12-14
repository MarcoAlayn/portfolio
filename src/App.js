import "./App.css";
import logo from "./assets/logo.png";
import profile from "./assets/profile.png";
import TechCard from "./components/TechCard";
import WorkCard from "./components/workCard";
import SocialCard from "./components/socialCard";
import html from "./assets/logos/1.png";
import css from "./assets/logos/2.png";
import js from "./assets/logos/3.png";
import react from "./assets/logos/4.png";
import redux from "./assets/logos/5.png";
import github from "./assets/logos/6.png";
import npm from "./assets/logos/7.png";
import photoshop from "./assets/logos/8.png";
import figma from "./assets/logos/9.png";
import clinica from "./assets/works/clinic.jpg";
import xcaret from "./assets/works/xcaret.jpg";
import turing from "./assets/works/turing.jpg";
import whatsapp from "./assets/logos/10.png";
import linkedin from "./assets/logos/12.png";
import email from "./assets/logos/11.png";
import cv from "./assets/cv/cv.pdf";

function App() {
  return (
    <div className="app ">
      <header id="header" className="header">
        <div className="margin">
          <div className="containerRow ">
            <img src={logo} alt="logo" className="logo" />
            <nav className="navbar">
              <a href="#header" className="link">
                inicio
              </a>
              <a href="#about" className="link">
                sobre mi
              </a>
              {/* <a href="#tech" className="link">
                tecnologías
              </a> */}
              <a href="#exp" className="link">
                experiencia
              </a>
              <a href="#contact" className="link">
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
                <a href={cv} download="Cv-MarcoRobles-Frontend-Dev">
                  Descargar CV
                </a>
                <a href="#contact">Contactame</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="about containerColumn">
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

      <section id="tech" className="tecnologies margin">
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

      <sections id="exp" className="experience">
        <div className="margin">
          <h2 className="h2">últimos trabajos</h2>
          <div className="cards">
            <div className="card">
              <WorkCard
                image={clinica}
                name={"clínica dental revolución"}
                linkCode={"https://github.com/MarcoAlayn/Dental-Clinic-Landing"}
                linkPage={"http://dental-clinic-landing-kappa.vercel.app/"}
              />
            </div>
            <div className="card">
              <WorkCard
                image={turing}
                name={"turing-ia"}
                linkCode={"https://github.com/MarcoAlayn/Turing-IA-Web-Site"}
                linkPage={"http://turing-ia-marcorobles.vercel.app/"}
              />
            </div>
            <div className="card">
              <WorkCard
                image={xcaret}
                name={"xcaret - landing page"}
                linkCode={"https://github.com/MarcoAlayn/Xcaret-Landin-Page"}
                linkPage={"http://xcaret-landin-page.vercel.app/"}
              />
            </div>
          </div>
        </div>
      </sections>

      <section id="contact" className="contact ">
        <div className="margin">
          <h2 className="h2">contáctame</h2>
          <p className="contacText">
            Envíame un mensaje a través del medio de prefieras...{" "}
          </p>
          <div className="contactCards containerRow">
            <div className="socCar">
              <SocialCard
                name={"whatsapp"}
                img={whatsapp}
                link={"https://wa.link/ocrptc"}
              />
            </div>
            <div className="socCar">
              <SocialCard
                name={"linkedin"}
                img={linkedin}
                link={"https://www.linkedin.com/in/marcorobles-developer/"}
              />
            </div>
            <div className="socCar">
              <SocialCard
                name={"e-mail"}
                img={email}
                link={"mailto:marc_rob92@hotmail.com"}
              />
            </div>
          </div>
        </div>
      </section>
      <footer className="footer containerRow ">
        <p>Gracias por tu visita </p>
        <img src={logo} alt={logo} />
        <p>Copyright © 2022</p>
      </footer>
    </div>
  );
}

export default App;
