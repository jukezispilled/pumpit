// App.js
import React from 'react';
import backgroundImage from './giga.jpg'; // Import the background image
import logo from './logo.svg';
import TweetButton from './TweetButton';
import Xlogo from './xlogo.jpg';
import TG from './tg.png';

function App() {
  const tweetText = "📞Call is in. Pump it pump.fun:"
  const solAddress = "https://pump.fun/AcjKQuHBFSabU7TzSoPBj7bVtK4FQm5ooMZTfAsJ16hZ"

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`, // Set the background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Make sure the background covers the entire viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={backgroundStyle}>
      <div className='flex justify-center items-center'>
        <div className='grid text-9xl md:text-[200px] text-white font-custom'>
          <div className='grid'>
            GIGADON
            <div className='pt-2 text-center font-custom text-2xl flex justify-center -mt-3'>
                  <a href="https://twitter.com/gigadonsol" className='p-2 hover:scale-110 transition ease-in-out duration-200'><img src={Xlogo} alt='Xlogo' className='w-14 h-14 rounded-md'></img></a>
                  <a href="https://t.me/gigadonsol" className='p-2 hover:scale-110 transition ease-in-out duration-200'><img src={TG} alt='Tg logo' className='w-14 h-14'></img></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

