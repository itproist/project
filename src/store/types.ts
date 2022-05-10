import { userIntoActionsType } from './actions';

export type userInfoReducerType = {
  name: string;
};

export type setUserNameActionType = {
  type: typeof userIntoActionsType.setUserName;
  payload: string;
};

export type actionType = setUserNameActionType;
