import logoImg from '../../assets/logo.svg';
import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="logo" />
    </Container>
  );
};

export default Header;
