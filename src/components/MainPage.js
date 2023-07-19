import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      {' '}
      <header className='header'></header>
      <main className='main'>
        <Link className='main_btn--link' to='/Memory'>
          {' '}
          <button className='main_gameBtn'>MEMORIA</button>
        </Link>

        <Link className='main_btn--link' to='/Memory'>
          {' '}
          <button className='main_gameBtn'>NÚMEROS</button>
        </Link>

        <Link className='main_btn--link' to='/Letters'>
          {' '}
          <button className='main_gameBtn'>LETRAS </button>
        </Link>
      </main>
    </div>
  );
};

export default MainPage;
