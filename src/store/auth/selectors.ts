import RootReducerType from '../rootType';

export const GetUserName = (state: RootReducerType) => state.auth.name;

export default GetUserName;
