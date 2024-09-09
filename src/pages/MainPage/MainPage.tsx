import { Outlet } from 'react-router-dom';

export const MainPage = () => {
  return (
    <div className='wrapper'>
      <header>
        <div className='container'>Hello World</div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
