import React from 'react';
import { Twitter, Instagram as Telegram } from 'lucide-react';

function App() {
  const backgroundImages = {
    main: "https://eyojcehzhevkbnvbvzrp.supabase.co/storage/v1/object/public/random-storage/chromosome/banner%20large.png",
    panels: [
      {
        images: [
          "https://raw.githubusercontent.com/Angelio-git/GTC/main/assets/photo_2025-04-09_16-24-59.jpg",
          "https://raw.githubusercontent.com/Angelio-git/GTC/main/assets/photo_2025-04-09_16-24-50.jpg"
        ],
        caption: "Our heroes meet in the bustling city center."
      },
      {
        images: [
          "https://raw.githubusercontent.com/Angelio-git/GTC/main/assets/panel3.jpg",
          "https://raw.githubusercontent.com/Angelio-git/GTC/main/assets/panel4.jpg"
        ],
        caption: "They embark on a thrilling adventure."
      },
      {
        images: [
          "https://raw.githubusercontent.com/Angelio-git/GTC/main/assets/panel5.jpg"
        ],
        caption: "A moment of reflection and fun."
      }
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
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Twitter size={32} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Telegram size={32} />
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

      {/* Comic Panels with multiple images */}
      <section className="grid grid-cols-1 gap-6 p-4 bg-zinc-900">
        {backgroundImages.panels.map((panel, index) => (
          <div key={index} className="comic-panel rounded-xl p-4 bg-black bg-opacity-60">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {panel.images.map((imgUrl, i) => (
                <div key={i} className="rounded overflow-hidden shadow-lg">
                  <img 
                    src={imgUrl} 
                    alt={`Panel ${index + 1} - ${i + 1}`} 
                    className="w-full h-[500px] object-contain bg-black rounded" 
                  />
                </div>
              ))}
            </div>
            <div className="text-white text-lg mt-4 text-center font-semibold">
              {panel.caption} {/* Display the caption here */}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
