import { useParams } from 'react-router-dom';
import { albums } from '../data/photos';

export function useAlbum() {
  const { albumId } = useParams();
  const album = albums.find((item) => item.id === albumId) ?? null;

  return { album, albumId };
}
