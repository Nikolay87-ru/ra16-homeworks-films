import React from 'react';
import { Star } from './Star';

type StarsProps = {
  count?: number;
};

export const Stars: React.FC<StarsProps> = ({ count = 0 }) => {
  if (typeof count !== 'number' || count < 1 || count > 5) {
    return null;
  }

  return (
    <ul>
      <li className="flex flex-row pb-2">
        {Array.from({ length: count }, (_, i) => (
          <Star key={i} />
        ))}
      </li>
    </ul>
  );
};