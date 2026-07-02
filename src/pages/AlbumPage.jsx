import { useParams, Link } from 'react-router-dom';
import { albums } from '../data/photos';
import Gallery from '../components/Gallery';
import './AlbumPage.css';

const AlbumPage = () => {
  const { albumId } = useParams();
  const album = albums.find((a) => a.id === albumId);

  if (!album) {
    return (
      <div className="album-page fade-in">
        <div className="container">
          <h1>Álbum no encontrado</h1>
          <Link to="/galeria" className="back-link">
            Volver a la galería
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="album-page fade-in">
      <div className="album-header">
        <h1>{album.title}</h1>
        <p>{album.description}</p>
      </div>
      <div className="container">
        <Link to="/galeria" className="back-link">
          ← Volver a la galería
        </Link>
        <Gallery photos={album.photos} />
      </div>
    </div>
  );
};

export default AlbumPage;
