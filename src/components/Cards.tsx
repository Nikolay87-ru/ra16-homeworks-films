import React from 'react';
import { FaHeart, FaInfoCircle } from 'react-icons/fa';

type Card = {
  name: string;
  price: string;
  genre: string;
  img: string;
};

export const Cards: React.FC<{ cards: Card[] }> = ({ cards }) => (
  <div className="grid grid-cols-1 gap-16">
    {cards.map((card, index) => (
      <div 
        key={index} 
        className="relative h-96 bg-white rounded-lg shadow-xl overflow-visible"
      >
        {/* Слой 1: Постер (выходит за границы) - ваше позиционирование */}
        <div className="absolute top-0 left-10 w-64 h-80 -mt-8 -ml-4 z-0 shadow-md overflow-hidden">
          <img
            src={card.img}
            alt={card.name}
            className="w-full h-full object-cover"
            // onError={(e) => {
            //   (e.target as HTMLImageElement).style.backgroundColor = '#f3f4f6';
            //   console.log('Image failed to load:', card.img);
            // }}
          />
        </div>

        {/* Слой 2: Жанр - ваше позиционирование */}
        <div className="absolute -top-4 left-60 bg-yellow-400 px-3 py-1 shadow-md z-20">
          <span className="text-xs font-bold text-gray-800 uppercase">
            {card.genre}
          </span>
        </div>

        {/* Слой 3: Основное содержимое карточки */}
        <div className="relative z-10 h-full flex flex-col justify-between p-6 ml-48">
          {/* Верхняя часть с названием по центру и иконками справа */}
          <div className="flex justify-between items-center relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-full text-center">
              <h3 className="text-xl font-bold text-gray-800 inline-block">
                {card.name}
              </h3>
            </div>
            <div className="flex gap-2 ml-auto">
              <button className="text-gray-400 hover:text-red-500 transition-colors">
                <FaHeart size={18} />
              </button>
              <button className="text-gray-400 hover:text-blue-500 transition-colors">
                <FaInfoCircle size={18} />
              </button>
            </div>
          </div>

          {/* Нижняя часть с кнопкой и ссылкой */}
          <div className="flex flex-col items-start gap-3">
            <button className="px-5 py-2 border-2 border-red-500 text-red-500 font-bold hover:bg-red-500 hover:text-white transition-colors rounded-full">
              Купить {card.price} ₽
            </button>
            <a 
              href="#" 
              className="text-blue-500 hover:text-blue-700 font-medium text-sm"
            >
              Подробнее →
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
);