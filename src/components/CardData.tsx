import { Cards } from './Cards';

const cardData = [
  {
    name: 'Супермен',
    price: '1299',
    genre: 'экшн',
    img: '/superman.jpg', 
    rating: 4,
  },
  {
    name: 'Хороший, плохой, злой',
    price: '899',
    genre: 'вестерн',
    img: '/eastwood.jpg', 
    rating: 5,
  },
];

export const useCards = () => {
  return {
    cardData: <Cards cards={cardData} />,
  };
};