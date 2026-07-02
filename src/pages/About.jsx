import './About.css';

const About = () => {
  return (
    <div className="about fade-in">
      <div className="container">
        <h1 className="page-title">Sobre mí</h1>
        <div className="about-content">
          <div className="about-image">
            <div className="avatar">
              <img
                src="https://live.staticflickr.com/972/41936185322_d43b7b1e0c_h.jpg"
                alt="Joaquín Rocuant"
              />
            </div>
          </div>
          <div className="about-text">
            <p>
              Soy Joaquín Rocuant, fotógrafo apasionado por capturar momentos únicos
              y contar historias a través de imágenes. Mi trabajo se centra en explorar
              la belleza de lo cotidiano y los paisajes que nos rodean.
            </p>
            <p>
              Con años de experiencia en fotografía, he desarrollado un estilo propio
              que combina la técnica con la sensibilidad artística. Cada fotografía es
              una oportunidad para ver el mundo desde una perspectiva diferente.
            </p>
            <p>
              Te invito a explorar mis álbumes y descubrir la belleza a través de mis lentes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
