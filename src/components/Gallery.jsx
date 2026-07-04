import { useState } from 'react';
import { useGalleryFadeIn } from '../hooks/useGalleryFadeIn';
import Modal from './Modal';
import './Gallery.css';

const Gallery = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const { itemRefs, useFadeIn } = useGalleryFadeIn(photos);

  return (
    <div className="gallery">
      <div className="masonry">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className={`masonry-item ${useFadeIn ? 'fade-in-item' : ''}`}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            style={useFadeIn ? { transitionDelay: `${(index % 3) * 0.1}s` } : {}}
            onClick={() => setSelectedPhoto(photo)}
          >
            <img src={photo.url} alt={photo.title} />
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
