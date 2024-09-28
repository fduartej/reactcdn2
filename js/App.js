// App.js
function App() {
  const [currentView, setCurrentView] = React.useState("crud"); // Estado para cambiar entre vistas
  const [isModalOpen, setIsModalOpen] = React.useState(false); // Estado para controlar el modal

  const changeView = (view) => {
    setCurrentView(view);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <nav>
        <button onClick={() => changeView("crud")}>CRUD de Usuarios</button>
        <button onClick={() => changeView("contact")}>
          Formulario de Contacto
        </button>
        <button onClick={openModal}>Abrir Modal</button>
      </nav>

      <div className="container">
        {currentView === "crud" ? <CrudView /> : <ContactForm />}
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

// Renderizar la aplicación principal
ReactDOM.render(<App />, document.getElementById("root"));
