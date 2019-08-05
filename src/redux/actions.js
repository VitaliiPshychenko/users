export const LOAD_USERS = 'load_users';
export const CHANGE_PAGE = 'change_page';

export const loadUsers = () => {
  const url = 'http://dev.frevend.com/json/users.json';
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';

  return dispatch => {
    fetch(proxyurl + url)
      .then(response => response.json())
      .then(listOfUsers => {
        dispatch({
          type: LOAD_USERS,
          listOfUsers,
        });
      });
  };
};

export const changePage = id => {
  return {
    type: CHANGE_PAGE,
    id,
  };
};
