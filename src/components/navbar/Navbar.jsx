import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Wixotel</span>
        <div className="navItems">
          <button type="navButton" className="">
            Register
          </button>
          <button type="navButton" className="">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
