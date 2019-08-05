import React, { Component } from 'react';

export default class UsersList extends Component {
  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    const { currentPage, usersPerPage, listOfUsers } = this.props;

    if (!listOfUsers) {
      return <div>Loading...</div>;
    } else {
      const indexOfLastUser = currentPage * usersPerPage;
      const indexOfFirstUser = indexOfLastUser - usersPerPage;
      const currentUsers = listOfUsers.users.slice(
        indexOfFirstUser,
        indexOfLastUser,
      );

      const renderUsers = currentUsers.map(user => {
        return (
          <li key={user.id}>
            <h3>
              {user.name} {user.surname}
            </h3>
            <p>{user.desc}</p>
          </li>
        );
      });

      const pageNumbers = [];
      for (
        let i = 1;
        i <= Math.ceil(listOfUsers.users.length / usersPerPage);
        i++
      ) {
        pageNumbers.push(i);
      }

      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li key={number}>
            <a
              className="a"
              href={number}
              id={number}
              onClick={event => {
                event.preventDefault();
                return this.props.changePage(event.target.id);
              }}
            >
              {number}
            </a>
          </li>
        );
      });

      return (
        <div>
          <ul className="page-users">{renderUsers}</ul>
          <ul className="page-numbers">{renderPageNumbers}</ul>
        </div>
      );
    }
  }
}
