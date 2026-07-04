import './About.css';
import { aboutContent } from '../data/about';

const About = () => {
  const { pageTitle, image, paragraphs } = aboutContent;

  return (
    <div className="about fade-in">
      <div className="container">
        <h1 className="page-title">{pageTitle}</h1>
        <div className="about-content">
          <div className="about-image">
            <div className="avatar">
              <img src={image.src} alt={image.alt} />
            </div>
          </div>
          <div className="about-text">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
