import { UserActionsType } from './actions';
import { ActionType, UserReducerType } from './types';

const initialState: UserReducerType = {
  data: [],
};

const usersReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case UserActionsType.getUsers:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default usersReducer;
