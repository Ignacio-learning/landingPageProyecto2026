import { albums } from '../data/photos';
import { galleryContent } from '../data/gallery';
import AlbumCard from '../components/AlbumCard';
import './GalleryPage.css';

const GalleryPage = () => {
  const { pageTitle } = galleryContent;

  return (
    <div className="gallery-page fade-in">
      <div className="container">
        <h1 className="page-title">{pageTitle}</h1>
        <div className="albums-grid">
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
