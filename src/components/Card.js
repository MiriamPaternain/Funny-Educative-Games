 const Card = ({currentCard, userLetters, }) => {
  const renderSolutionLetters = () => {
    const worldLetters= currentCard.word.split('');
    return worldLetters.map((letter, index) => {
      const exists = userLetters.includes(letter.toUpperCase());
      return (
       <span key={index}>{exists ? letter : ''}</span>
      );
    });
  };

  
  return (
    <div >
      {renderSolutionLetters()}
        <img src={currentCard.image} alt='' className='cardContainer__img' />
        <p className="cardContainer__word">{currentCard.word}</p>
     
    </div>
  );
};

export default Card;
