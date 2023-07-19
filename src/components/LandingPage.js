import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing">
      <p className="text--1">
        ¡Descubre nuestros juegos infantiles educativos y diviértete
        aprendiendo!
      </p>

      <p className="text--2">
        En nuestra plataforma de juegos, encontrarás una amplia variedad de
        actividades diseñadas especialmente para niños y niñas en edad escolar.
        Nuestro enfoque principal es combinar la diversión con el aprendizaje,
        brindando a los pequeños una experiencia única y enriquecedora.
      </p>
      <p className="text--3">
        ¡Empieza a jugar ahora y descubre un mundo de aprendizaje divertido para
        tus pequeños!
      </p>
      <button className="landing__button">
        <Link className="landing__button--link" to="/mainPage">                   
        ¡Diviértete!
        </Link>
        </button>
    </div>
  );
};

export default LandingPage;
