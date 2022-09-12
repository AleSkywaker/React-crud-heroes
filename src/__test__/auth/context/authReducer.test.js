import { authReducer, types } from '../../../auth';
describe('Test AuthReducer', () => {

  test('should return default state', () => {
    const state = authReducer({ isLogged :false}, {});
    expect(state).toEqual({ isLogged: false });
   })

  test('should call login auth and set user', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Alex',
        id: '123',
      },
    };
    const state = authReducer({ isLogged: false }, action);
    expect(state).toEqual({
      isLogged: true,
      user: action.payload
     });
   })


  test('should call logout delete user name and set isLogged as false', () => {
    const state = {
      isLogged: true,
      user: { name: 'Alex' , id: '123'}
    };
    const action = { type: types.logout };
    const newState = authReducer(state, action);
    expect(newState).toEqual({ isLogged: false });
   })

});
