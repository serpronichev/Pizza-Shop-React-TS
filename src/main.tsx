import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
// import { MainLayout } from './layout/MainLayout/MainLayout';
import './css/index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
