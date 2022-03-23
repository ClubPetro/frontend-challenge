import { logo } from 'src/assets';
import { HeaderJSX } from './Header.styles';

function Header() {
  return (
    <HeaderJSX>
      <div className='main__container'>
        <img src={logo} alt='logo' />
      </div>
    </HeaderJSX>
  );
}

export default Header;
