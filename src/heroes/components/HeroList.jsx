import { useEffect, useState } from 'react';
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

  const [dcHeroes, setDcHeroes] = useState([]);
  const data = getHeroesByPublisher(publisher);
  useEffect(() => {
    setDcHeroes(data);
  }, []);

  return (
    <ul>
      <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {dcHeroes.map((heroe) => (
          <HeroCard key={heroe.id}  {...heroe} />
        ))}
      </div>
    </ul>
  );
};
