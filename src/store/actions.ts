export const userIntoActionsType = {
  setUserName: 'get_name',
};

export const setUserNameAction = (name: string) => ({
  type: userIntoActionsType.setUserName,
  payload: name,
});
