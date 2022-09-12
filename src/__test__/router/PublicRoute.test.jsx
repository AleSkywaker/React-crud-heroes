import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import { PublicRoute } from '../../heroes/routes/PublicRoute';

describe('Test public route', () => {

  test('should display children if not logged', () => {
    const contextValue = { isLogged: false }

      render(
        <AuthContext.Provider value={contextValue}>
          <PublicRoute>
          <h1>Ruta Publica</h1>
          </PublicRoute>
        </AuthContext.Provider>
      );
     expect(screen.getByText('Ruta Publica')).toBeTruthy();
   })

   test('should navigate to home if user is not logged', () => {
      const contextValue = {
        isLogged: true,
        user:{
          name: 'Alex',
          id: '123'
        }
       };

       render(
         <AuthContext.Provider value={contextValue}>
           <MemoryRouter initialEntries={['/marvel']}>
             <Routes>
               <Route
                 path='login'
                 element={
                   <PublicRoute>
                     <h1>Ruta Publica</h1>
                   </PublicRoute>
                 }
               />
               <Route path='marvel' element={<h1>Pagina marvel</h1>} />
             </Routes>
           </MemoryRouter>
         </AuthContext.Provider>
       );

       expect(screen.getByText('Pagina marvel')).toBeTruthy();

    })
});
