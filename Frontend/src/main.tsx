import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import {routes} from './routes/routes'
import Test from './test'

export default function App() {
  const element = useRoutes(routes);
  return element;
}

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </StrictMode>
);
