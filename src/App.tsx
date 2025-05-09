import { useCards } from './components/Page';

export const App = () => {
  const { filmsCards } = useCards();

  return <div className="container bg-gray-500 mx-auto px-4 py-16">{filmsCards}</div>;
};
