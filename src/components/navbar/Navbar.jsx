import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Wixotel</span>
        <div className="navItems">
          <button type="button" clasName="navButton">
            Register
          </button>
          <button type="button" className="navButton">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
