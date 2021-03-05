import React, { useState } from 'react';
import Header from './components/Header';
import Board from './components/Board';

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleScore = score => {
    setScore(score);
    if (score > bestScore) {
      setBestScore(score);
    }
  };

  return (
    <div className='App'>
      <Header score={score} bestScore={bestScore} />
      <Board handleScore={handleScore} score={score} />
    </div>
  );
};

export default App;
