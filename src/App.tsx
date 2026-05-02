import { useEffect } from 'react';
import { Home } from './pages/Home';
import { MenuPage } from './pages/MenuPage';
import { useHash, getRoute } from './lib/useHash';

function App() {
  const hash = useHash();
  const route = getRoute(hash);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [route]);

  return (
    <div className="app">
      {route === '/menu' ? <MenuPage /> : <Home />}
    </div>
  );
}

export default App;
