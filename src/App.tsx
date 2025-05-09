import { useCards } from './components/CardData';

export const App = () => {
  const { cardData } = useCards();

  return <div className="container bg-gray-500 mx-auto px-4 py-16">{cardData}</div>;
};
