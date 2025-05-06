import { Cards } from './Cards';

const filmsCards = [
  {
    name: 'Супермен',
    price: '1299',
    genre: 'экшн',
    img: '/superman.jpg', 
  },
  {
    name: 'Хороший, плохой, злой',
    price: '899',
    genre: 'вестерн',
    img: '/eastwood.jpg', 
  },
];

export const useCards = () => {
  return {
    filmsCards: <Cards cards={filmsCards} />,
  };
};
