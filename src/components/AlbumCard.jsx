import { Link } from 'react-router-dom';
import './AlbumCard.css';

const AlbumCard = ({ album }) => {
  return (
    <Link to={`/album/${album.id}`} className="album-card">
      <div className="album-card-image">
        <img src={album.cover} alt={album.title} />
      </div>
      <div className="album-card-info">
        <h3>{album.title}</h3>
        <p>{album.description}</p>
      </div>
    </Link>
  );
};

export default AlbumCard;
