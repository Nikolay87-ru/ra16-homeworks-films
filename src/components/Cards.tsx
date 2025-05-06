import React from 'react';

type Card = {
  name: string;
  price: string;
  genre: string;
  img: string;
};

export const Cards: React.FC<{ cards: Card[] }> = ({ cards }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
    {cards.map((card, index) => (
      <div key={index} className="relative h-80 rounded-lg overflow-hidden shadow-lg group">
        <img
          src={card.img}
          alt={card.name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute top-0 left-0 right-0 flex items-center justify-center p-4">
          <h3 className="text-black text-xl font-bold text-center drop-shadow-lg">{card.genre}</h3>
        </div>

        <div className="top-0 left-0 right-0 flex items-center justify-center p-4">
          <h3 className="text-black text-xl font-bold text-center drop-shadow-lg">{card.name}</h3>
        </div>

        <button className="px-4 py-2 border-2 border-red-500 text-red-500 font-bold bg-transparent hover:bg-red-500 hover:text-white transition-colors">
          `купить ${card.price} ₽`
        </button>
      </div>
    ))}
  </div>
);
