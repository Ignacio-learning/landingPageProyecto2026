import { useState } from 'react';
import Modal from './Modal';
import './Gallery.css';

const Gallery = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="gallery">
      <div className="masonry">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="masonry-item"
            onClick={() => setSelectedPhoto(photo)}
          >
            <img src={photo.url} alt={photo.title} loading="lazy" />
          </div>
        ))}
      </div>
      {selectedPhoto && (
        <Modal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
      )}
    </div>
  );
};

export default Gallery;
