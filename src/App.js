// App.js
import React from 'react';
import backgroundImage from './771.jpg'; // Import the background image
import logo from './logo.svg';
import TweetButton from './TweetButton';

function App() {
  const tweetText = "📞Call is in. Pump it pump.fun:"
  const solAddress = "https://pump.fun/3vUdCssS5HWh6oReT3TT43dFWkjNnSi1FjPE4xAysrT2"

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
        <div className='grid'>
          <div className='text-7xl lg:text-9xl font-bold text-white'>PUMP IT</div>
          <div className='flex justify-center'><TweetButton tweetText={tweetText} solAddress={solAddress}></TweetButton></div>
        </div>
      </div>
    </div>
  );
}

export default App;

