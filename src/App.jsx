import React, { useState } from 'react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { name: 'Traditional Turkish Coffee', desc: 'Rich, bold, and brewed to perfection in a copper cezve.', price: '250 BDT' },
    { name: 'Kunefe', desc: 'Warm, sweet cheese pastry topped with pistachios and syrup.', price: '450 BDT' },
    { name: 'Mixed Grill Platter', desc: 'Assorted Turkish kebabs, spiced rice, and grilled vegetables.', price: '850 BDT' },
    { name: 'Pistachio Baklava', desc: 'Crispy layered filo filled with premium nuts and honey.', price: '300 BDT' },
  ];

  return (
    <div className="font-serif bg-[#1a1410] text-[#e0d6c8]">
      {/* Navbar */}
      <nav className="bg-[#1a1410]/95 backdrop-blur border-b border-[#D4AF37]/20 p-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-[0.2em] text-[#D4AF37]">AMBRRAK</h1>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#home" className="hover:text-[#D4AF37] transition uppercase text-sm tracking-wider">Home</a>
            <a href="#about" className="hover:text-[#D4AF37] transition uppercase text-sm tracking-wider">About</a>
            <a href="#menu" className="hover:text-[#D4AF37] transition uppercase text-sm tracking-wider">Menu</a>
            <a href="#contact" className="bg-[#D4AF37] text-black px-6 py-2 rounded-full hover:bg-[#eac64f] transition uppercase text-sm font-bold tracking-wider">Order Now</a>
          </div>
          <button className="md:hidden text-3xl text-[#D4AF37]" onClick={() => setIsOpen(!isOpen)}>☰</button>
        </div>
        {isOpen && (
          <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
            <a href="#home" className="hover:text-[#D4AF37] transition">Home</a>
            <a href="#about" className="hover:text-[#D4AF37] transition">About</a>
            <a href="#menu" className="hover:text-[#D4AF37] transition">Menu</a>
            <a href="#contact" className="bg-[#D4AF37] text-black px-6 py-2 rounded-full">Order Now</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center text-center bg-cover bg-center relative" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(26,20,16,0.8)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')"}}>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410] to-transparent"></div>
        <div className="relative z-10 text-white max-w-3xl mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 text-[#D4AF37] tracking-wide drop-shadow-lg">Taste the Essence of Turkey</h2>
          <p className="text-xl md:text-2xl mb-10 font-light text-gray-200">Experience the authentic Turkish Coffee & Cuisine at MidTown CPDL, Chattogram.</p>
          <a href="#menu" className="bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] font-bold py-4 px-10 rounded-full text-lg hover:bg-[#D4AF37] hover:text-black transition duration-300 tracking-wider">EXPLORE MENU</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#1a1410]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 relative">
            <img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Coffee" className="rounded-lg shadow-2xl w-full object-cover h-[500px]" />
            <div className="absolute -bottom-6 -right-6 bg-[#D4AF37] text-black p-6 rounded-lg hidden md:block">
              <p className="text-3xl font-bold">4 PM - 11 PM</p>
              <p className="text-sm uppercase tracking-wider">Open Daily</p>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <h3 className="text-4xl font-bold text-[#D4AF37] mb-6">About AMBRRAK Intown</h3>
            <p className="text-gray-400 leading-relaxed text-lg mb-8">At AMBRRAK, we bring the rich heritage of Turkish flavors to the heart of Chattogram. From perfectly brewed traditional Turkish coffee in copper pots to mouth-watering kebabs and syrupy desserts, every item is crafted with passion and authenticity.</p>
            <div className="flex gap-6">
              <div className="border-l-2 border-[#D4AF37] pl-4">
                <h4 className="text-xl font-bold text-white">Authentic Recipes</h4>
                <p className="text-gray-500">Traditional Turkish Taste</p>
              </div>
              <div className="border-l-2 border-[#D4AF37] pl-4">
                <h4 className="text-xl font-bold text-white">Premium Ambiance</h4>
                <p className="text-gray-500">MidTown CPDL, Level 2</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-[#211a14]">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold text-[#D4AF37] mb-4 tracking-wider">OUR SPECIALTIES</h3>
          <p className="text-gray-500 mb-16 text-lg">A curated selection of our finest Turkish delights</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto text-left">
            {menuItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b border-gray-800 pb-6 hover:border-[#D4AF37] transition group">
                <div className="mr-4">
                  <h4 className="text-2xl font-bold text-white group-hover:text-[#D4AF37] transition">{item.name}</h4>
                  <p className="text-gray-500 mt-2 text-base">{item.desc}</p>
                </div>
                <span className="text-[#D4AF37] font-bold text-2xl whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-[#1a1410] border-t border-[#D4AF37]/10 py-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-[#D4AF37] mb-4 tracking-[0.2em]">AMBRRAK</h3>
          <p className="mb-2 text-gray-400 text-lg">MidTown CPDL, Level 2, Chattogram</p>
          <p className="mb-8 text-gray-500">DM us to order or call: +880 1XXX-XXXXXX</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="bg-white/5 text-[#D4AF37] w-12 h-12 flex items-center justify-center rounded-full hover:bg-[#D4AF37] hover:text-black transition duration-300 text-sm font-bold">FB</a>
            <a href="#" className="bg-white/5 text-[#D4AF37] w-12 h-12 flex items-center justify-center rounded-full hover:bg-[#D4AF37] hover:text-black transition duration-300 text-sm font-bold">IG</a>
          </div>
          <p className="mt-8 text-gray-600 text-sm">© 2024 AMBRRAK. All rights reserved. Demo Site Built by Md. Asifur Rahman.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;