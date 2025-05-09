import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { TbShare } from "react-icons/tb";
import { Stars } from './Stars';

type Card = {
  name: string;
  price: string;
  genre: string;
  img: string;
  rating?: number;
};

export const Cards: React.FC<{ cards: Card[] }> = ({ cards }) => (
  <div className="grid grid-cols-1 gap-16">
    {cards.map((card, index) => (
      <div key={index} className="relative h-80 bg-white rounded-lg shadow-lg overflow-visible">
        <div className="absolute top-0 left-10 w-64 h-80 -mt-8 -ml-4 z-0">
          <div
            className="absolute inset-0 bg-transparent rounded-lg shadow-poster"
            style={{
              filter: 'drop-shadow(0 25px 25px rgba(0, 0, 0, 0.25))',
            }}
          ></div>

          <div className="relative z-10 w-full h-full rounded-lg overflow-hidden">
            <img src={card.img} alt={card.name} className="w-full h-full object-cover" />
          </div>
        </div>

        <div
          className={`absolute -top-4 left-60 px-3 py-1 shadow-md z-20 ${
            card.genre === 'экшн'
              ? 'bg-orange-400'
              : card.genre === 'вестерн'
                ? 'bg-amber-800'
                : 'bg-gray-400'
          }`}
        >
          <span className="text-xs font-bold text-white uppercase">{card.genre}</span>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-around p-6 ml-72">
          <div className="flex justify-between items-center">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-full pl-7">
              <h3 className="text-3xl font-bold text-gray-500 inline-block">{card.name}</h3>
            </div>
            <div className="flex gap-4 ml-auto mb-20">
              <button className="text-gray-400 hover:text-red-500 transition-colors">
                <FaHeart size={24} />
              </button>
              <button className="text-gray-400 hover:text-blue-500 transition-colors">
                <TbShare size={24} />
              </button>
            </div>
          </div>
          <div>

          <Stars count={card.rating} />

            <div className="flex items-center gap-4">
              <button className="px-6 py-3 bg-gray-500 text-white font-bold hover:bg-gray-600 transition-colors uppercase">
                Купить {card.price} ₽
              </button>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-600 font-medium text-sm no-underline uppercase"
              >
                Подробнее →
              </a>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);