// App.js
import React from 'react';
import backgroundImage from './giga.jpg'; // Import the background image
import logo from './logo.svg';
import TweetButton from './TweetButton';

function App() {
  const tweetText = "📞Call is in. Pump it pump.fun:"
  const solAddress = "https://pump.fun/AcjKQuHBFSabU7TzSoPBj7bVtK4FQm5ooMZTfAsJ16hZ"

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`, // Set the background image
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    height: '100vh', // Make sure the background covers the entire viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={backgroundStyle}>
      <div className='flex justify-center items-center'>
        <div className='grid text-9xl md:text-[200px] font-custom'>
          GIGADON
        </div>
      </div>
    </div>
  );
}

export default App;

