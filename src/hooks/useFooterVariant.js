import { useLocation } from 'react-router-dom';

export function useFooterVariant() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return isHome ? 'site-footer--overlay' : 'site-footer--static';
}
