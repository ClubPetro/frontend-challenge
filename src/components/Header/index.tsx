import "./style.css";
import Logo from "../../assets/img/logo.png";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <header className="header">
      <div className="header-container">
        <img
          onClick={() => history.push("./")}
          className="header-logo"
          src={Logo}
          alt="Logo"
        />
      </div>
    </header>
  );
};

export default Header;
