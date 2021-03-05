import React, { useState, useEffect } from 'react';

const Board = props => {
  const [clickedArr, setClickedArr] = useState([]);
  const [cards, setCards] = useState([
    {
      name: 'Morty Smith',
      img: './Img/Morty_Smith.jpg',
    },
    {
      name: 'Rick Sanchez',
      img: './Img/Rick_Sanchez.png',
    },
    {
      name: 'Jerry Smith',
      img: './Img/Jerry_Smith.png',
    },
    {
      name: 'Beth Smith',
      img: './Img/Beth_Smith.png',
    },
    {
      name: 'Meeseeks',
      img: './Img/MeeseeksHQ.png',
    },
    {
      name: 'Bird Person',
      img: './Img/Birdperson.jpg',
    },
    {
      name: 'Pickle Rick',
      img: './Img/Ratpicklerick.png',
    },
    {
      name: 'Snuffles',
      img: './Img/Snuffles-helmet.jpg',
    },
    {
      name: 'Zeep Xanflorp',
      img: './Img/Zeep.png',
    },
    {
      name: 'Morty Jr',
      img: './Img/Morty_Jr_Sitting.JPG.jpg',
    },
    {
      name: 'Mr. Poopybutthole',
      img: './Img/S2e4_mr_poopybutthole.png',
    },
    {
      name: 'King Flippy Nips',
      img: './Img/King_Flippynips.png',
    },
  ]);

  // useEffect(() => {
  //   const handleClick = () => {
  //     console.log('hello');
  //   };
  //   const cards = document.getElementById('cards');
  //   cards.addEventListener('click', handleClick);

  //   return () => {
  //     cards.removeEventListener('click', handleClick);
  //   };
  // }, []);

  const handleCardClick = e => {
    const target = e.currentTarget.lastElementChild.textContent;
    const shuffleArr = shuffle(cards);
    setCards(shuffleArr);

    if (clickedArr.indexOf(target) < 0) {
      setClickedArr(clickedArr.concat(target));
      props.handleScore(props.score + 1);
    } else {
      setClickedArr([]);
      props.handleScore(0);
    }
  };

  // Using the Fisher-Yates shuffle to randomize items in array
  const shuffle = arr => {
    let currentIndex = arr.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }
    return arr;
  };

  return (
    <main>
      {cards.map((value, index) => {
        return (
          <div className='cards' key={index} onClick={handleCardClick}>
            <img src={value.img} alt={value.name} />
            <p>{value.name}</p>
          </div>
        );
      })}
    </main>
  );
};

export default Board;
