import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import sol2 from '../images/sol2.png';
import nube from '../images/nube.png';
import Card from './Card.js';


//constantes
const Letters = () => {
const letters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'Ñ',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

const cards = [
    {
      id: 1,
      image: sol2,
      word: 'SOL',
    },
    {
      id: 2,
      image: nube,
      word: 'NUBE',
    },
  ];

const [currentCardIndex, setCurrentCardIndex] = useState(0);

const currentCard = cards[currentCardIndex];

const [userLetters, setUserLetters] = useState([]);



  //events
  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  
const handleLetters = (letter) => {
  const clickedLetter = letter.toUpperCase();
  const currentWord = currentCard.word.toUpperCase();

  if (clickedLetter === currentWord[userLetters.length]) {
    setUserLetters((prevuserLetters) => 
      [...prevuserLetters,
      {[userLetters.length]: "correcta"}]);
  }
};

  return (
    <div>
      <Link className='letters__button--link' to='/mainPage'>
        Volver
      </Link>

      <div className='mainContainer'>
        <h1 className='title'>LETRAS</h1>
        <p className='description'>
          Busca y pulsa sobre cada letra de la palabra en el mismo orden que
          aparece
        </p>

        <section className='letters'>
          {letters.map((eachLetter, index) => (
            <button
            key={index}
              className='letters__button--ABC' 
               onClick={() => handleLetters(eachLetter)}
            >
              {userLetters[index] === "correcta" && <span>correcta</span>}
              {eachLetter}
            </button>
          ))}
        </section>

        <section className='card'>
          <button className='card__btn--left' onClick={handlePrevCard}>
            <i className='fa-solid fa-chevron-left'></i>
          </button>

          <Card currentCard={currentCard} userLetters={userLetters} />

          <button className='card__btn--right' onClick={handleNextCard}>
            <i className='fa-solid fa-chevron-right'></i>
          </button>
        </section>

      </div>
    </div>
  );
};

export default Letters;
