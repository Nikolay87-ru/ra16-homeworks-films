import { Cards } from './Cards';

const filmsCards = [
  {
    name: 'Супермен',
    price: '1299',
    genre: 'экшн',
    img: './public/superman.jpg',
  },
  {
    name: 'Хороший, плохой, злой',
    price: '899',
    genre: 'вестерн',
    img: './public/eastwood.jpg',
  },
];

export const useCards = () => {
  return {
    filmsCards: <Cards cards={filmsCards} />,
  };
};
