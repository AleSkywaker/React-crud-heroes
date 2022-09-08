import { heroes } from '../data/heroes';
import { HERO } from '../../heroes/data/constants';

export const getHeroesByPublisher = (publisher) => {
  const validPublisher = [HERO.DC, HERO.MARVEL];
  if (!validPublisher.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  }

  return heroes.filter(heroe => heroe.publisher === publisher );
};
