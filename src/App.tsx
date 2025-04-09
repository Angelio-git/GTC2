import React from 'react';
import { Twitter } from 'lucide-react';

function App() {
  const backgroundImages = {
    main: "https://eyojcehzhevkbnvbvzrp.supabase.co/storage/v1/object/public/random-storage/chromosome/banner%20large.png",
    panels: [
      {
        image: "https://raw.githubusercontent.com/Angelio-git/GTC2/main/assets/gta6_better.png",
       
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
            
          </h1>

          <div className="bg-white text-black px-6 py-3 rounded-full border-2 border-black max-w-full overflow-x-auto mb-6">
            <code className="whitespace-nowrap text-sm md:text-base font-mono">
              CA: 
            </code>
          </div>

          <div className="flex gap-6">
            <a href="https://x.com/i/communities/1910105773859799231/" className="hover:text-blue-400 transition-colors">
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
            PROMPT: Create a full-body digital illustration in the style of the GTA V cover art — comic-book inspired, gritty and vibrant, with bold outlines and high-energy composition. The subject is an individual with visible and respectful Down syndrome features (such as almond-shaped eyes, flatter nose bridge, and round face), styled to resemble [insert inspiration — e.g. a powerful business figure, glamorous influencer, action hero, etc.]. They are wearing [insert outfit or signature style], posed confidently in front of [insert iconic environment — e.g. private jet, beach, city skyline, etc.]. The scene should be colorful and cinematic, with strong urban energy, a dynamic background, and room for use in a collage-style layout.
          </p>
        </div>
      </section>

      {/* Comic Panels with single image and text overlay */}
      <section className="grid grid-cols-1 gap-4 bg-zinc-900">
        {backgroundImages.panels.map((panel, index) => (
          <div key={index} className="comic-panel rounded-xl bg-black bg-opacity-60 relative" style={{ height: '3400px' }}> {/* Increased height of the container */}
            <img 
              src={panel.image} 
              alt={`Panel ${index + 1}`} 
              className="w-full h-[700] object-cover bg-black rounded" // Use h-full to fill the container
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
