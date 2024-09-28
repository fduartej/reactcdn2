// components/CrudView.js
function CrudView() {
  const [users, setUsers] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState(null);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };

  const updateUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const editUser = (user) => {
    setCurrentUser(user);
  };

  return (
    <div>
      <h2>CRUD de Usuarios</h2>
      <UserForm
        onSubmit={currentUser ? updateUser : addUser}
        user={currentUser}
      />
      <UserList users={users} onEdit={editUser} onDelete={deleteUser} />
    </div>
  );
}

// Define globally
window.CrudView = CrudView;
