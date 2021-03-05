const Header = props => {
  return (
    <header>
      <h1 id='title'>
        <div className='title-text'>
          Rick<span id='And'>And</span>Morty
        </div>
        <div className='title-text'>Memory Game</div>
      </h1>
      <h3>
        Test your memory! Earn points by clicking on an image no more than once.
      </h3>
      <div id='score-container'>
        <p>Score: {props.score}</p>
        <p>Best Score: {props.bestScore}</p>
      </div>
    </header>
  );
};

export default Header;
