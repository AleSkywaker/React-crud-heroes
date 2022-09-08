import { HeroList } from '../components';
import { HERO } from '../../heroes/data/constants';

export const MarvelPage = () => {
  return (
    <>
      <h1>Marvel Comics</h1>
      <hr />
      <HeroList publisher={HERO.MARVEL} />
    </>
  );
};
