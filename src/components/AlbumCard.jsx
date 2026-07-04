import { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './AlbumCard.css';

const AlbumCard = ({ album }) => {
  const cardRef = useRef(null);
  const imgRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    const img = imgRef.current;
    if (!card || !img) return;

    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const moveX = (0.5 - x) * 20;
    const moveY = (0.5 - y) * 20;

    img.style.transform = `scale(1.15) translate(${moveX}px, ${moveY}px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const img = imgRef.current;
    if (!img) return;
    img.style.transform = 'scale(1) translate(0, 0)';
  }, []);

  return (
    <Link
      to={`/album/${album.id}`}
      className="album-card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="album-card-image">
        <img ref={imgRef} src={album.cover} alt={album.title} />
      </div>
      <div className="album-card-info">
        <h3>{album.title}</h3>
        <p>{album.description}</p>
      </div>
    </Link>
  );
};

export default AlbumCard;
