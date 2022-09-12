const { render, screen } = require('@testing-library/react');
const { MemoryRouter } = require('react-router-dom');
import { AuthContext } from '../../auth/context/AuthContext';
import { AppRouter } from '../../router/AppRouter';

describe('Test in <AppRouter>', () => {

  test('should display login if not logged', () => {
   const contextValue = {
    isLogged: false
   }
    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
            <AppRouter/>
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByText('Login')).toBeTruthy()
    expect(screen.getAllByText('Login').length).toBe(2)
   })

   test('should display home if user is logged', () => {

    const contextValue = {
      isLogged: true,
    };
    render(
      <MemoryRouter initialEntries={['/login']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getAllByText('Thor Odinson')).toBeTruthy();
    })
});
