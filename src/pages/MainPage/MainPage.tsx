import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';

export const MainPage = () => {
  return (
    <div className='wrapper'>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
