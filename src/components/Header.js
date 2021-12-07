import logo from "../images/Vector.svg";

function Header() {
  return (
    <div>
      <header className="header">
        <img
          className="header__logo"
          src={logo}
          alt="Around the
        US"
        />
      </header>
    </div>
  );
}

export default Header;
