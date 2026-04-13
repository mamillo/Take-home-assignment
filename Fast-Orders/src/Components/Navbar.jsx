function Navbar({ setView }) {
  return (
    <nav className="navbar">
      <h1>Purchase Orders</h1>
      <button className="list" onClick={() => setView("list")}>View List</button>
      <button className="Create" onClick={() => setView("create")}>Create Listing</button>
    </nav>
  );
}
export default Navbar;
