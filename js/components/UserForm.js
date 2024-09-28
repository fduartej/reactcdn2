// components/UserForm.js
function UserForm({ onSubmit, user }) {
  const [name, setName] = React.useState(user ? user.name : "");

  React.useEffect(() => {
    setName(user ? user.name : "");
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...user, name });
    setName(""); // Limpiar el formulario después de submit
  };

  return (
    <div>
      <h2>{user ? "Editar Usuario" : "Agregar Usuario"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre del usuario"
          required
        />
        <button type="submit">{user ? "Actualizar" : "Agregar"}</button>
      </form>
    </div>
  );
}

// Define globally
window.UserForm = UserForm;
