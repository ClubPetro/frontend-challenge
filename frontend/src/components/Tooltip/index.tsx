import { FiAlertCircle } from 'react-icons/fi';

import { Container } from './styles';

interface TooltipPros {
  errorMessage: string;
}

const Tooltip: React.FC<TooltipPros> = ({ errorMessage }) => {
  return (
    <Container>
      <FiAlertCircle size={20} color="#FA5858" />
      <span>{errorMessage}</span>
    </Container>
  );
};

export default Tooltip;
