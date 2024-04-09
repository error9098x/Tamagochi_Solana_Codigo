import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useState } from 'react';

const Home = () => {
  const [happiness, setHappiness] = useState(Math.floor(Math.random() * 101));
  const [hunger, setHunger] = useState(Math.floor(Math.random() * 101));
  const [sleepiness, setSleepiness] = useState(Math.floor(Math.random() * 101));
  const [energy, setEnergy] = useState(Math.floor(Math.random() * 101));
  const [isMinted, setIsMinted] = useState(false);
  const [tamagotchiImage, setTamagotchiImage] = useState(null);

  const tamagotchiImages = [
    'https://cdn.picrew.me/shareImg/org/202404/2217843_WeU7PGOF.png',
    'https://cdn.picrew.me/shareImg/org/202404/2217843_eh8CsD8k.png',
    'https://cdn.picrew.me/shareImg/org/202404/2217843_bDdeyfV6.png',
    'https://cdn.picrew.me/shareImg/org/202404/2217843_xBPrPQBM.png',
    'https://cdn.picrew.me/shareImg/org/202404/2217843_KfUqdPcC.png',
    'https://cdn.picrew.me/shareImg/org/202404/2217843_204qXK8S.png',
    'https://cdn.picrew.me/shareImg/org/202404/2217843_5N8EpK60.png',
    'https://cdn.picrew.me/shareImg/org/202404/2217843_9MRMokrC.png',
  ];

  const feedTamagotchi = () => {
    setHunger(Math.max(0, hunger - 10));
    setHappiness(Math.min(100, happiness + 5));
    const audio = new Audio('https://s3.amazonaws.com/files.uploads.lastmileai.com/uploads/clury37vn0066pefn2634veim/2024_4_9_6_3_58/9732/mewww.mp3');
    audio.play();
  };

  const playWithTamagotchi = () => {
    setHappiness(Math.min(100, happiness + 10));
    setEnergy(Math.max(0, energy - 5));
    const audio = new Audio('https://s3.amazonaws.com/files.uploads.lastmileai.com/uploads/clury37vn0066pefn2634veim/2024_4_9_6_4_16/3830/hmmm.mp3');
    audio.play();
  };

  const mintTamagotchi = () => {
    const randomImage = tamagotchiImages[Math.floor(Math.random() * tamagotchiImages.length)];
    setTamagotchiImage(randomImage);
    setIsMinted(true);
  };

  return (
    <div style={{ backgroundColor: '#FFA500', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#FFFFFF', fontSize: '2rem', marginBottom: '1rem' }}>My Tamagotchi Cat</h1>
      {!isMinted ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{ color: '#FFFFFF', fontSize: '1.2rem', marginBottom: '1rem' }}>Please connect your wallet and push Mint to get your Tamagotchi cat.</p>
          <button onClick={mintTamagotchi} style={{ backgroundColor: '#FFFFFF', color: '#FFA500', border: 'none', borderRadius: '4px', padding: '0.5rem 1rem', fontSize: '1rem', cursor: 'pointer' }}>Mint</button>
        </div>
      ) : (
        <>
          <img src={tamagotchiImage} alt="Tamagotchi Cat" style={{ width: '200px', height: '200px', borderRadius: '50%', marginBottom: '1rem' }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '300px', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '0.5rem' }}>
              <span style={{ color: '#FFFFFF' }}>Happiness:</span>
              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '4px', width: '200px', height: '20px' }}>
                <div style={{ backgroundColor: '#0077BE', borderRadius: '4px', width: `${happiness}%`, height: '100%' }}></div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '0.5rem' }}>
              <span style={{ color: '#FFFFFF' }}>Hunger:</span>
              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '4px', width: '200px', height: '20px' }}>
                <div style={{ backgroundColor: '#0077BE', borderRadius: '4px', width: `${hunger}%`, height: '100%' }}></div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '0.5rem' }}>
              <span style={{ color: '#FFFFFF' }}>Sleepiness:</span>
              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '4px', width: '200px', height: '20px' }}>
                <div style={{ backgroundColor: '#0077BE', borderRadius: '4px', width: `${sleepiness}%`, height: '100%' }}></div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '0.5rem' }}>
              <span style={{ color: '#FFFFFF' }}>Energy:</span>
              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '4px', width: '200px', height: '20px' }}>
                <div style={{ backgroundColor: '#0077BE', borderRadius: '4px', width: `${energy}%`, height: '100%' }}></div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around', width: '200px' }}>
            <button onClick={feedTamagotchi} style={{ backgroundColor: '#FFFFFF', color: '#FFA500', border: 'none', borderRadius: '4px', padding: '0.5rem 1rem', fontSize: '1rem', cursor: 'pointer' }}>Feed</button>
            <button onClick={playWithTamagotchi} style={{ backgroundColor: '#FFFFFF', color: '#FFA500', border: 'none', borderRadius: '4px', padding: '0.5rem 1rem', fontSize: '1rem', cursor: 'pointer' }}>Play</button>
          </div>
        </>
      )}
      <div style={{ marginTop: '1rem' }}>
        <WalletMultiButton />
      </div>
    </div>
  );
};

export default Home;
