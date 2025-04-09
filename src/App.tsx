import React from 'react';
import { Twitter } from 'lucide-react';

function App() {
  const backgroundImages = {
    main: "https://eyojcehzhevkbnvbvzrp.supabase.co/storage/v1/object/public/random-storage/chromosome/banner%20large.png",
    panels: [
      {
        image: "https://raw.githubusercontent.com/Angelio-git/GTC/main/assets/gta6.jpg",
        caption: "Our heroes meet in the bustling city center."
      },
      {
        image: "https://raw.githubusercontent.com/Angelio-git/GTC/main/assets/panel3.jpg",
        caption: "They embark on a thrilling adventure."
      },
     
    ]
  };

  return (
    <div className="relative w-full text-white">
      {/* Hero Panel */}
      <section className="comic-panel" style={{
        backgroundImage: `url(${backgroundImages.main})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        height: '50vh', // Reduced height here
      }}>
        <div className="panel-content flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-widest drop-shadow-[3px_3px_0px_black]">
            Grand Theft Chromosome
          </h1>

          <div className="bg-white text-black px-6 py-3 rounded-full border-2 border-black max-w-full overflow-x-auto mb-6">
            <code className="whitespace-nowrap text-sm md:text-base font-mono">
              CA: Dm6j3n2k9ANW7MWqc1L9iDyNs38Re2WoXsYDxixepump
            </code>
          </div>

          <div className="flex gap-6">
            <a href="https://x.com/Bark0na" className="hover:text-blue-400 transition-colors">
              <Twitter size={32} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
           
            </a>
          </div>
        </div>
      </section>

      {/* Scrollable Story Text */}
      <section className="bg-black text-white py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto text-xl leading-relaxed tracking-wide">
          <p>
            In this reimagined version of Grand Theft Auto (GTA), the game presents a colorful, vibrant urban landscape where the characters, all of whom have Down syndrome, navigate their lives with humor, heart, and a strong sense of community. The story follows a group of friends as they embark on various adventures, tackling everyday challenges with a mix of enthusiasm and creativity.
          </p>
        </div>
      </section>

      {/* Comic Panels with single image and text overlay */}
      <section className="grid grid-cols-1 gap-4 bg-zinc-900">
        {backgroundImages.panels.map((panel, index) => (
          <div key={index} className="comic-panel rounded-xl bg-black bg-opacity-60 relative" style={{ height: '800px' }}> {/* Increased height of the container */}
            <img 
              src={panel.image} 
              alt={`Panel ${index + 1}`} 
              className="w-full h-full object-cover bg-black rounded" // Use h-full to fill the container
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-semibold text-center z-10 p-4 bg-black bg-opacity-70 rounded-lg">
              {panel.caption}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
