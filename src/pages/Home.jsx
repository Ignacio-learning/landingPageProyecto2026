import './Home.css';
import { homeContent } from '../data/home';

const Home = () => {
  const { title, subtitle } = homeContent;

  return (
    <div className="home fade-in">
      <section className="hero">
        <div className="hero-content">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
      </section>
    </div>
  );
};

export default Home;
