import { userInfoReducerType } from './auth/types';
import { UserReducerType } from './users/types';

export type RootReducerType = {
  auth: userInfoReducerType;
  users: UserReducerType;
};

export default RootReducerType;
