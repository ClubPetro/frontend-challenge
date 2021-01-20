import "./style.css"
import Logo from "../../assets/img/logo.png"

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img className="header-logo" src={Logo} alt="Logo"/>
      </div>
    </header>
  )
}

export default Header