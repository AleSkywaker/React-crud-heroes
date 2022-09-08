import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../components/HeroCard'
import queryString from 'query-string';
import { getHeroByName } from '../helpers/getHeroesByName';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();


  const {q = ''} = queryString.parse(location.search);
  const heroes = getHeroByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 1) && heroes.length === 0;

  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: '',
  });

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // if(searchText.trim().length <= 1) return;
    navigate(`?q=${searchText.toLowerCase().trim()}`)
    onResetForm();
  }


  return (
    <>
      <h1>Search...</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <form onSubmit={handleSearchSubmit}>
            <input
              type='text'
              name='searchText'
              value={searchText}
              placeholder='Search a hero'
              className='form-control'
              autoComplete='off'
              onChange={onInputChange}
            />
            <button className='btn btn-outline-success mt-3'>Search</button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          <hr />
          <div className='alert alert-primary' style={{ display: showSearch ? '' : 'none' }}>
            Search a hero
          </div>
          <div className='alert alert-danger' style={{ display: showError ? '' : 'none' }}>
            Not hero found <b>{q}</b>
          </div>
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
}
