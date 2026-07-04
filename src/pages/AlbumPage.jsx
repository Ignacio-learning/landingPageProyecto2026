import { Link } from 'react-router-dom';
import { albumPageContent } from '../data/gallery';
import { useAlbum } from '../hooks/useAlbum';
import Gallery from '../components/Gallery';
import './AlbumPage.css';

const AlbumPage = () => {
  const { album } = useAlbum();
  const { notFoundTitle, backLabel, backLabelWithArrow } = albumPageContent;

  if (!album) {
    return (
      <div className="album-page fade-in">
        <div className="container">
          <h1>{notFoundTitle}</h1>
          <Link to="/galeria" className="back-link">
            {backLabel}
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
          {backLabelWithArrow}
        </Link>
        <Gallery photos={album.photos} />
      </div>
    </div>
  );
};

export default AlbumPage;
