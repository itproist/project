import { UserInfoActionTypeType } from './types';

export const userIntoActionsType: UserInfoActionTypeType = {
  setUserName: 'GET_USER_NAME',
  clearUserName: 'CLEAR_USER_NAME',
};

export const setUserNameAction = (name: string) => ({
  type: userIntoActionsType.setUserName,
  payload: name,
});

export const clearUserNameAction = () => ({
  type: userIntoActionsType.clearUserName,
});
