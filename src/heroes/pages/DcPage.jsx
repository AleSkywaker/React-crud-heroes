import { HeroList } from '../components'
import { HERO } from '../../heroes/data/constants';

export const DcPage = () => {

  return (
    <>
      <h1>Dc Comics</h1>
      <hr />
      <HeroList publisher={HERO.DC} />
    </>
  );
}
