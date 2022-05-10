import { userIntoActionsType } from './actions';
import { actionType, userInfoReducerType } from './types';

const initialState: userInfoReducerType = {
  name: '',
};

const userInfoReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case userIntoActionsType.setUserName:
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
};

export default userInfoReducer;
