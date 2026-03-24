const AdminPage = () => {
  const userLog = JSON.parse(sessionStorage.getItem("usuarioLog"));
  return (
    <>
      <h1 className="text-center my-5">Hola {userLog?.nombreUsuario}</h1>
    </>
  );
};

export default AdminPage;
