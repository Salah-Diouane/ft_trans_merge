import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes/routes';
import { Toaster } from 'react-hot-toast';

function App() {
  const element = useRoutes(routes);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {element}
    </>
  );
}

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
