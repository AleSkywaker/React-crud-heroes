import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import { PrivateRoute } from '../../heroes/routes/PrivateRoute';

describe('Test private route', () => {
  test('should display children if is logged', () => {

    Storage.prototype.setItem = jest.fn();

    const contextValue = { isLogged: true,
    user:{
      name:'Alex',
      id: '123'
    } };

    render(
      <AuthContext.Provider value={contextValue}>
      <MemoryRouter initialEntries={["/marvel"]}>
        <PrivateRoute>
          <h1>Ruta Privada</h1>
        </PrivateRoute>
      </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText('Ruta Privada')).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
    // screen.debug()
  });
});
