import { Navigate, Route, Routes } from 'react-router-dom';

import { DcPage, MarvelPage } from '../heroes';
import { LoginPage } from '../auth';
import { Navbar} from '../ui';
import { HeroesRoutes }from '../heroes';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='login' element={<LoginPage />} />
        <Route path='/*' element={<HeroesRoutes />} />
      </Routes>
    </>
  );
}
