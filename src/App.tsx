import { useCards } from './components/Page';

export const App = () => {
  const { filmsCards } = useCards();

  return <div className="container bg-yellow-50 mx-auto px-4 py-8">{filmsCards}</div>;
};
