import { types } from '../../../auth';

describe('Test types', () => {

  test('should return this types', () => {
    expect(types).toEqual({
      login: 'Login',
      logout: 'Logout',
    });
   })

});
