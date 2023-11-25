import "./mobilebar.css";
const MobileBar = () => {
  return (
    <nav className="mobile-nav d-lg-none">
      <a href="#" className="bloc-icon">
        Home
      </a>
      <a href="#" className="bloc-icon">
        Create
      </a>
      <a href="#" className="bloc-icon">
        Library
      </a>
    </nav>
  );
};

export default MobileBar;
