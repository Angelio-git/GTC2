import React from 'react';
import { Twitter, Instagram as Telegram } from 'lucide-react';

function App() {
  // You'll replace these URLs with your GitHub image URLs
  const backgroundImages = {
    main: "MAIN_BACKGROUND_URL",
    panels: [
      "https://raw.githubusercontent.com/Angelio-git/GTC/main/assets/photo_2025-04-09_19-10-26.jpg",
      "PANEL_2_URL",
      "PANEL_3_URL",
      // Add more panel URLs as needed
    ]
  };

  return (
    <div className="relative w-full">
      {/* Hero Panel */}
      <section className="comic-panel" style={{
        backgroundImage: `url(${backgroundImages.main})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
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
        {/* Panel 1 */}
        <div className="comic-panel" style={{
          backgroundImage: `url(${backgroundImages.panels[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh'
        }}>
          <div className="panel-content flex items-center justify-start p-8">
            <div className="comic-text">
              <p className="text-xl md:text-2xl">
                In this reimagined version of Grand Theft Auto...
              </p>
            </div>
          </div>
        </div>

        {/* Panel 2 */}
        <div className="comic-panel" style={{
          backgroundImage: `url(${backgroundImages.panels[1]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh'
        }}>
          <div className="panel-content flex items-center justify-end p-8">
            <div className="comic-text">
              <p className="text-xl md:text-2xl">
                Where characters navigate their lives with humor and heart...
              </p>
            </div>
          </div>
        </div>

        {/* Panel 3 */}
        <div className="comic-panel" style={{
          backgroundImage: `url(${backgroundImages.panels[2]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh'
        }}>
          <div className="panel-content flex items-center justify-center p-8">
            <div className="comic-text">
              <p className="text-xl md:text-2xl">
                Creating a strong sense of community and adventure...
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;