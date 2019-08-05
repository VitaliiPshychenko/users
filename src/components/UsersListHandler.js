import { connect } from 'react-redux';
import { loadUsers, changePage } from '../redux/actions';
import UsersList from './UsersList';

const mapStateToProps = state => {
  return {
    listOfUsers: state.listOfUsers,
    currentPage: state.currentPage,
    usersPerPage: state.usersPerPage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadUsers: () => dispatch(loadUsers()),
    changePage: id => dispatch(changePage(id)),
  };
};

const UsersListHandler = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersList);

export default UsersListHandler;
