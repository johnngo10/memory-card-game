import React, { useState } from 'react';
import Header from './components/Header';
import Board from './components/Board';

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleScore = scoreNum => {
    setScore(scoreNum);
    if (score > bestScore && scoreNum === 0) {
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
