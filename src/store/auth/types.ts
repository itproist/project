import { userIntoActionsType } from './actions';

export type userInfoReducerType = {
  name: string;
};

export type UserInfoActionTypeType = {
  setUserName: 'GET_USER_NAME';
  clearUserName: 'CLEAR_USER_NAME';
};

export type setUserNameActionType = {
  type: UserInfoActionTypeType['setUserName'];
  payload: string;
};

export type clearUserNameActionType = {
  type: UserInfoActionTypeType['clearUserName'];
};

export type actionType = setUserNameActionType | clearUserNameActionType;
