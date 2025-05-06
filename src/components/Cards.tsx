import React from 'react';
import { FaHeart, FaInfoCircle } from 'react-icons/fa';

type Card = {
  name: string;
  price: string;
  genre: string;
  img: string;
};

export const Cards: React.FC<{ cards: Card[] }> = ({ cards }) => (
  <div className="grid grid-cols-1 gap-10">
    {cards.map((card, index) => (
      <div key={index} className="relative h-96 bg-white rounded-lg overflow-hidden shadow-xl group">
        <div className="relative z-10 h-full flex flex-col justify-between p-6 bg-white">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-gray-800">{card.name}</h3>
            <div className="flex space-x-2">
              <button className="text-gray-400 hover:text-red-500 transition-colors">
                <FaHeart size={20} />
              </button>
              <button className="text-gray-400 hover:text-blue-500 transition-colors">
                <FaInfoCircle size={20} />
              </button>
            </div>
          </div>

          <div className="flex items-center space-y-4 gap-2">
            <button className="px-6 py-2 border-2 border-red-500 text-red-500 font-bold bg-transparent hover:bg-red-500 hover:text-white transition-colors rounded-full">
              Купить {card.price} ₽
            </button>
            <a href="#" className="text-blue-500 hover:text-blue-700 font-medium flex items-center">
              Подробнее →
            </a>
          </div>
        </div>

        <div className="absolute z-0 top-0 left-0 w-3/4 h-64 -mt-4 -ml-4">
          <img
            src={card.img}
            alt={card.name}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="absolute z-20 top-4 right-4 bg-yellow-400 px-3 py-1 rounded-full shadow-md">
          <span className="text-sm font-bold text-gray-800 uppercase">{card.genre}</span>
        </div>
      </div>
    ))}
  </div>
);
