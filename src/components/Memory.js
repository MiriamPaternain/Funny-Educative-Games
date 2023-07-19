import { Link } from 'react-router-dom';
import sol2 from '../images/sol2.png';
import nube from '../images/nube.png';
import pelota from '../images/pelota.png';

const Memory = () => {
  const cards = [
    {
      id: 1,
      image: sol2,
      flipped: false,
    },
    {
      id: 2,
      image: nube,
      flipped: false,
    },
    {
      id: 3,
      image: pelota,
      flipped:false
    },
  ];

  return (
    <div>
      <Link className='letters__button--link' to='/mainPage'>
        Volver
      </Link>
      <h1 className='memory__title'>Memoria</h1>
      <p className='memory__text'>Forma parejas pulsando sobre las tarjetas</p>

      <section className='memoryCards'>
        {cards.map((card) => (
          <button
            key={card.id}
            className='memoryCards__btn'
            //onClick={handleCards()}
          ><img src={card.image} alt="" className='memoryCards__image'/></button>
        ))}
      </section>
    </div>
  );
};

export default Memory;
