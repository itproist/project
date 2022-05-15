import makeRequest from '../../network';
import { UsersActionsTypeType } from './types';

export const UserActionsType: UsersActionsTypeType = {
  getUsers: 'GET_USERS',
};

export const GetUserAction = () => async (dispatch: any) => {
  const data = await makeRequest({ url: '/character' });
  dispatch({
    type: UserActionsType.getUsers,
    payload: data.results,
  });
};
