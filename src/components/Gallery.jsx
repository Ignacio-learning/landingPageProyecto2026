import { useState, useEffect, useRef } from 'react';
import Modal from './Modal';
import './Gallery.css';

const Gallery = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const itemRefs = useRef([]);
  const useFadeIn = photos.length > 8;

  useEffect(() => {
    if (!useFadeIn) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    requestAnimationFrame(() => {
      itemRefs.current.forEach((item) => {
        if (item) observer.observe(item);
      });
    });

    return () => observer.disconnect();
  }, [photos, useFadeIn]);

  return (
    <div className="gallery">
      <div className="masonry">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className={`masonry-item ${useFadeIn ? 'fade-in-item' : ''}`}
            ref={(el) => (itemRefs.current[index] = el)}
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
