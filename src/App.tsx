import React from 'react';
import { Twitter, Instagram as Telegram } from 'lucide-react';

function App() {
  const backgroundImages = {
    main: "https://raw.githubusercontent.com/Angelio-git/GTC2/main/assets/photo_2025-04-09_19-10-26.jpg",
    panels: [
      "https://raw.githubusercontent.com/Angelio-git/GTC/main/assets/panel1.jpg",
      "https://raw.githubusercontent.com/Angelio-git/GTC/main/assets/panel2.jpg",
      "https://raw.githubusercontent.com/Angelio-git/GTC/main/assets/panel3.jpg",
      "https://raw.githubusercontent.com/Angelio-git/GTC/main/assets/panel4.jpg",
      "https://raw.githubusercontent.com/Angelio-git/GTC/main/assets/panel5.jpg",
      "https://raw.githubusercontent.com/Angelio-git/GTC/main/assets/panel6.jpg",
      "https://raw.githubusercontent.com/Angelio-git/GTC/main/assets/panel7.jpg",
      "https://raw.githubusercontent.com/Angelio-git/GTC/main/assets/panel8.jpg",
      "https://raw.githubusercontent.com/Angelio-git/GTC/main/assets/panel9.jpg",
    ]
  };

  return (
    <div className="relative w-full">
      {/* Hero Panel */}
      <section className="comic-panel" style={{
        backgroundImage: `url(${backgroundImages.main})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        height: '100vh',
      }}>
        <div className="panel-content flex flex-col items-center justify-center h-full px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-center mb-8 tracking-wider"
              style={{
                textShadow: '4px 4px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
              }}>
            Grand Theft Chromosome
          </h1>
          
          <div className="bg-white text-black px-6 py-3 rounded-full border-2 border-black max-w-full overflow-x-auto mb-8">
            <code className="whitespace-nowrap text-sm md:text-base">
              CA: Dm6j3n2k9ANW7MWqc1L9iDyNs38Re2WoXsYDxixepump
            </code>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Twitter size={32} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Telegram size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* Story Panels */}
      <section className="grid grid-cols-1 gap-4 p-4">
        {backgroundImages.panels.map((url, index) => (
          <div
            key={index}
            className="comic-panel rounded-xl overflow-hidden"
            style={{
              backgroundImage: `url(${url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '70vh'
            }}
          >
            <div className="panel-content flex items-center justify-center h-full p-8 bg-black bg-opacity-40">
              <div className="comic-text text-white max-w-2xl text-center">
                <p className="text-xl md:text-2xl">
                  {/* Placeholder content, can be updated per panel */}
                  Panel {index + 1}: This is a placeholder caption for the comic panel.
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
