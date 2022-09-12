import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../auth';
import { Navbar } from '../../../ui';

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: ()=> mockedUseNavigate
}));

describe('Test in <NavBar></NavBar>', () => {
  const contextValue = {
    isLogged: true,
    user: {
      name: 'Alex Colombo',
    },
    logOut: jest.fn(),
  };
  beforeEach(() => jest.clearAllMocks());

  test('should display user name', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getAllByText('Alex Colombo')).toBeTruthy();
  });

  test('should call logOut and navigate when click the button', () => {
    const { getByTestId } = render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const logOutBtn = getByTestId('logOutBtn');
    fireEvent.click(logOutBtn);

    expect(contextValue.logOut).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true });
  });
});
