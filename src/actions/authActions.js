export const setCurrentUser = (user, token) => ({
  type: 'SET_CURRENT_USER',
  payload: { user, token },
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER',
});