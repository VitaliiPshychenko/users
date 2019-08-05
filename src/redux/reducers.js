import { LOAD_USERS, CHANGE_PAGE } from './actions';

const initialState = { listOfUsers: null, currentPage: 1, usersPerPage: 5 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return {
        ...state,
        listOfUsers: action.listOfUsers,
      };

    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: Number(action.id),
      };

    default:
      return state;
  }
};

export default reducer;
