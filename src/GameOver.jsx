function GameOver({ onRestart }) {
    return (
      <div className="body_style">
        <div className="container">
          <h1 className="header_text">You're so cruel ❤️</h1>
          <button className="game-over-button" onClick={onRestart}>
            Restart
          </button>
          <div className="gif_container">
            <img
              src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjhteWRud21vbGZ4MWNuNDNqM2ZhbDh5ZWZjMGY1YnY3czk5OWJqMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/dyAJQMYDdd8oHNgOUb/giphy.gif"
              alt="Happy GIF"
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default GameOver;
  