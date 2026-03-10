import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Instagram } from 'lucide-react';

const shellImages = [
  { src: '/shells/scallop-orange.png', alt: 'Scallop shell' },
  { src: '/shells/conch.png', alt: 'Conch shell' },
  { src: '/shells/scallop-outline.png', alt: 'Scallop outline' },
  { src: '/shells/whelk.png', alt: 'Whelk shell' },
];

const ribbonShells = [
  { img: 0, left: '1%',  top: '35%', size: 16, rotate: -15,  opacity: 0.8 },
  { img: 2, left: '5%',  top: '62%', size: 14, rotate: 20,   opacity: 0.7 },
  { img: 3, left: '9%',  top: '42%', size: 15, rotate: -25,  opacity: 0.8 },
  { img: 0, left: '13%', top: '58%', size: 12, rotate: 10,   opacity: 0.65 },
  { img: 2, left: '17%', top: '38%', size: 13, rotate: 30,   opacity: 0.7 },
  { img: 3, left: '21%', top: '55%', size: 16, rotate: -20,  opacity: 0.8 },
  { img: 0, left: '25%', top: '45%', size: 14, rotate: 15,   opacity: 0.7 },
  { img: 2, left: '29%', top: '62%', size: 12, rotate: 25,   opacity: 0.65 },
  { img: 3, left: '33%', top: '38%', size: 15, rotate: -5,   opacity: 0.8 },
  { img: 0, left: '37%', top: '55%', size: 17, rotate: 18,   opacity: 0.7 },
  { img: 2, left: '41%', top: '42%', size: 16, rotate: 8,    opacity: 0.7 },
  { img: 3, left: '45%', top: '60%', size: 13, rotate: -30,  opacity: 0.65 },
  { img: 0, left: '49%', top: '38%', size: 15, rotate: 12,   opacity: 0.8 },
  { img: 2, left: '53%', top: '58%', size: 12, rotate: 22,   opacity: 0.7 },
  { img: 3, left: '57%', top: '42%', size: 16, rotate: -8,   opacity: 0.8 },
  { img: 0, left: '61%', top: '62%', size: 14, rotate: 28,   opacity: 0.65 },
  { img: 2, left: '65%', top: '38%', size: 13, rotate: 5,    opacity: 0.7 },
  { img: 3, left: '69%', top: '55%', size: 15, rotate: -25,  opacity: 0.8 },
  { img: 0, left: '73%', top: '45%', size: 16, rotate: 15,   opacity: 0.7 },
  { img: 2, left: '77%', top: '60%', size: 18, rotate: 20,   opacity: 0.8 },
  { img: 3, left: '81%', top: '38%', size: 12, rotate: -28,  opacity: 0.65 },
  { img: 0, left: '85%', top: '55%', size: 15, rotate: 8,    opacity: 0.75 },
  { img: 2, left: '89%', top: '42%', size: 13, rotate: 25,   opacity: 0.7 },
  { img: 3, left: '93%', top: '60%', size: 16, rotate: -5,   opacity: 0.75 },
  { img: 0, left: '97%', top: '45%', size: 14, rotate: 18,   opacity: 0.7 },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-sea-salt text-navy font-sans selection:bg-sand selection:text-navy">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 overflow-hidden ${
          isScrolled ? 'bg-sea-salt/90 backdrop-blur-md py-4 shadow-sm' : 'py-6'
        }`}
        style={{ backgroundColor: isScrolled ? undefined : 'transparent' }}
      >
        {/* Decorative shell images spread across the ribbon */}
        <div className="absolute inset-0 pointer-events-none hidden md:block" aria-hidden="true">
          {ribbonShells.map((shell, i) => (
            <img
              key={i}
              src={shellImages[shell.img].src}
              alt=""
              className="absolute object-contain drop-shadow-sm transition-opacity duration-500"
              style={{
                left: shell.left,
                top: shell.top,
                transform: `translate(-50%, -50%) rotate(${shell.rotate}deg)`,
                width: shell.size,
                height: shell.size,
                opacity: isScrolled ? shell.opacity : shell.opacity * 0.6,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div 
            className={`font-serif text-2xl tracking-wider cursor-pointer transition-colors duration-500 ${isScrolled ? 'text-navy' : 'text-sea-salt'}`}
            onClick={() => scrollTo('home')}
          >
            THE SHELL COLLECTIVE
          </div>
          
          {/* Desktop Nav */}
          <div className={`hidden md:flex items-center space-x-10 text-base font-medium tracking-widest uppercase transition-colors duration-500 ${isScrolled ? 'text-navy' : 'text-sea-salt'}`}>
            <button onClick={() => scrollTo('about')} className="hover:text-driftwood transition-colors">About</button>
            <button onClick={() => scrollTo('gallery')} className="hover:text-driftwood transition-colors">Gallery</button>
            <a href="https://www.instagram.com/shell_collective/" target="_blank" rel="noopener noreferrer" className="hover:text-driftwood transition-colors">
              <Instagram size={24} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden transition-colors duration-500 ${isScrolled ? 'text-navy' : 'text-sea-salt'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-sea-salt z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <button onClick={() => scrollTo('about')} className="font-serif text-3xl text-navy hover:text-driftwood transition-colors">About</button>
        <button onClick={() => scrollTo('gallery')} className="font-serif text-3xl text-navy hover:text-driftwood transition-colors">Gallery</button>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.png" 
            alt="Aerial coastal view" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-navy/30 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-sea-salt mb-6 tracking-tight drop-shadow-lg">
            Curated Coastal Elegance
          </h1>
          <p className="font-sans text-sea-salt/90 text-lg md:text-xl tracking-widest uppercase max-w-2xl mx-auto font-light">
            A Collection of Exquisite Shells
          </p>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center animate-bounce">
          <span className="text-sea-salt text-xs tracking-widest uppercase mb-2">Explore</span>
          <ChevronDown className="text-sea-salt" size={20} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="order-2 md:order-1 space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight">
              Heritage & <br/><span className="italic text-driftwood">Craftsmanship</span>
            </h2>
            <div className="w-12 h-[1px] bg-navy"></div>
            <p className="font-sans text-navy/80 leading-relaxed font-light text-lg">
              Hi! My name is Judy 🐚
            </p>
            <p className="font-sans text-navy/80 leading-relaxed font-light text-lg">
              For me, the beach isn't just a destination; it's my studio. As a self-taught seashell artist living in New England, I draw inspiration from the rhythmic tides and the unique character of our local waters.
            </p>
            <p className="font-sans text-navy/80 leading-relaxed font-light text-lg">
              I specialize in intricate shellwork that honors the organic shapes and colors of the ocean. My mission is simple: to take the small, often-overlooked wonders of the tide line and compose them into art that celebrates a lifelong connection to the sea.
            </p>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="rope-border">
              <div className="rope-corner-bl"></div>
              <div className="rope-corner-br"></div>
              <div className="aspect-[3/4] overflow-hidden rounded-sm">
                <img 
                  src="/about-crafting.png" 
                  alt="Judy crafting shell art" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-sand -z-10 hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 md:py-32 bg-sand/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-serif text-4xl md:text-5xl text-navy">The Collection</h2>
          </div>

          {/* Mirror NO.1 — The COMPO */}
          <div className="mb-24">
            <div className="text-center mb-10">
              <h3 className="font-serif text-3xl md:text-4xl text-navy mb-4">The COMPO</h3>
              <p className="font-sans text-navy/70 text-sm max-w-xl mx-auto leading-relaxed">
                Atlantic deep sea scallops, blue mussel shells, miniature cockles, slipper limpet shells, snail shells, and small auger shells
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="group relative overflow-hidden rounded-sm">
                <img 
                  src="/gallery/mirror1-angle.png" 
                  alt="The COMPO — angle view" 
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-500 flex items-end p-6 opacity-0 group-hover:opacity-100">
                  <span className="text-sea-salt font-serif text-lg tracking-wide">Angle View</span>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-sm">
                <img 
                  src="/gallery/mirror1-front.png" 
                  alt="The COMPO — front view" 
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-500 flex items-end p-6 opacity-0 group-hover:opacity-100">
                  <span className="text-sea-salt font-serif text-lg tracking-wide">Front View</span>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-sm">
                <img 
                  src="/gallery/mirror1-detail.png" 
                  alt="The COMPO — shell detail" 
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-500 flex items-end p-6 opacity-0 group-hover:opacity-100">
                  <span className="text-sea-salt font-serif text-lg tracking-wide">Shell Detail</span>
                </div>
              </div>
            </div>
          </div>

          {/* The BEACHSIDE */}
          <div className="mb-24">
            <div className="text-center mb-10">
              <h3 className="font-serif text-3xl md:text-4xl text-navy mb-4">The BEACHSIDE</h3>
              <p className="font-sans text-navy/70 text-sm max-w-xl mx-auto leading-relaxed">
                Blue mussel shells, slipper shells, bay scallops, moon snails, prickle cockles, jingle shells, barnacles
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden rounded-sm aspect-[4/3] bg-sand/20">
                <img 
                  src="/gallery/beachside-2.png" 
                  alt="The BEACHSIDE — angled view" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-500 flex items-end p-5 opacity-0 group-hover:opacity-100">
                  <span className="text-sea-salt font-serif text-base tracking-wide">Angled View</span>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-sm aspect-[4/3] bg-sand/20">
                <img 
                  src="/gallery/beachside-4.png" 
                  alt="The BEACHSIDE — shell detail" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-500 flex items-end p-5 opacity-0 group-hover:opacity-100">
                  <span className="text-sea-salt font-serif text-base tracking-wide">Shell Detail</span>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-sm aspect-[4/3] bg-sand/20">
                <img 
                  src="/gallery/beachside-5.png" 
                  alt="The BEACHSIDE — close-up detail" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-500 flex items-end p-5 opacity-0 group-hover:opacity-100">
                  <span className="text-sea-salt font-serif text-base tracking-wide">Close-up Detail</span>
                </div>
              </div>
            </div>
          </div>

          {/* The SASCO */}
          <div>
            <div className="text-center mb-10">
              <h3 className="font-serif text-3xl md:text-4xl text-navy mb-4">The SASCO</h3>
              <p className="font-sans text-navy/70 text-sm max-w-xl mx-auto leading-relaxed">
                Jingle shells, colored miniature cockles
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden rounded-sm aspect-[4/3] bg-sand/20">
                <img 
                  src="/gallery/sasco-1.png" 
                  alt="The SASCO — square mirror" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-500 flex items-end p-6 opacity-0 group-hover:opacity-100">
                  <span className="text-sea-salt font-serif text-lg tracking-wide">Full View</span>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-sm aspect-[4/3] bg-sand/20">
                <img 
                  src="/gallery/sasco-2.png" 
                  alt="The SASCO — angled view" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-500 flex items-end p-6 opacity-0 group-hover:opacity-100">
                  <span className="text-sea-salt font-serif text-lg tracking-wide">Angled View</span>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-sm aspect-[4/3] bg-sand/20">
                <img 
                  src="/gallery/sasco-3.png" 
                  alt="The SASCO — shell detail" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-500 flex items-end p-6 opacity-0 group-hover:opacity-100">
                  <span className="text-sea-salt font-serif text-lg tracking-wide">Shell Detail</span>
                </div>
              </div>
            </div>
          </div>

          {/* Irish Rock Oyster Trinket Dish */}
          <div className="mb-24">
            <div className="text-center mb-10">
              <h3 className="font-serif text-3xl md:text-4xl text-navy mb-4">Irish Rock Oyster Trinket Dish</h3>
              <p className="font-sans text-navy/70 text-sm max-w-xl mx-auto leading-relaxed">
                Irish oysters, coquina shells with turquoise center, miniature mussels, and button snail shells
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden rounded-sm aspect-[4/3] bg-sand/20">
                <img 
                  src="/gallery/oyster-2.png" 
                  alt="Irish Rock Oyster Trinket Dish — single dish" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-500 flex items-end p-6 opacity-0 group-hover:opacity-100">
                  <span className="text-sea-salt font-serif text-lg tracking-wide">Single Dish</span>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-sm aspect-[4/3] bg-sand/20">
                <img 
                  src="/gallery/oyster-1.png" 
                  alt="Irish Rock Oyster Trinket Dish — group view" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-500 flex items-end p-6 opacity-0 group-hover:opacity-100">
                  <span className="text-sea-salt font-serif text-lg tracking-wide">Group View</span>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-sm aspect-[4/3] bg-sand/20">
                <img 
                  src="/gallery/oyster-3.png" 
                  alt="Irish Rock Oyster Trinket Dish — detail" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-500 flex items-end p-6 opacity-0 group-hover:opacity-100">
                  <span className="text-sea-salt font-serif text-lg tracking-wide">Detail</span>
                </div>
              </div>
            </div>
          </div>

          {/* Candle Blossom Centerpiece */}
          <div>
            <div className="text-center mb-10">
              <h3 className="font-serif text-3xl md:text-4xl text-navy mb-4">Candle Blossom Centerpiece</h3>
              <p className="font-sans text-navy/70 text-sm max-w-xl mx-auto leading-relaxed">
                Eastern oysters
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="group relative overflow-hidden rounded-sm aspect-[4/3] bg-sand/20">
                <img 
                  src="/gallery/candle-2.png" 
                  alt="Candle Blossom Centerpiece — with candle" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-500 flex items-end p-6 opacity-0 group-hover:opacity-100">
                  <span className="text-sea-salt font-serif text-lg tracking-wide">With Candle</span>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-sm bg-sand/20">
                <img 
                  src="/gallery/candle-1.png" 
                  alt="Candle Blossom Centerpiece — styled view" 
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-500 flex items-end p-6 opacity-0 group-hover:opacity-100">
                  <span className="text-sea-salt font-serif text-lg tracking-wide">Styled View</span>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-sm aspect-[4/3] bg-sand/20">
                <img 
                  src="/gallery/candle-3.png" 
                  alt="Candle Blossom Centerpiece — shell detail" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-500 flex items-end p-6 opacity-0 group-hover:opacity-100">
                  <span className="text-sea-salt font-serif text-lg tracking-wide">Shell Detail</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-navy text-sea-salt py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl tracking-wider">THE SHELL COLLECTIVE</h3>
            <p className="font-sans text-sea-salt/70 font-light text-sm max-w-xs leading-relaxed">
              Curators of fine coastal artifacts. Bringing the quiet luxury of the ocean into refined spaces.
            </p>
          </div>
          
          <div className="flex justify-end items-center">
            <a href="https://www.instagram.com/shell_collective/" target="_blank" rel="noopener noreferrer" className="text-sea-salt/80 hover:text-sea-salt transition-colors">
              <Instagram size={36} />
            </a>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-sea-salt/10 flex flex-col md:flex-row justify-between items-center text-xs font-light text-sea-salt/50">
          <p>&copy; {new Date().getFullYear()} The Shell Collective. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-sea-salt transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sea-salt transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
