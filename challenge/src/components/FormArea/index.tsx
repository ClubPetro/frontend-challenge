import * as S from './styles';

import Container from '../Container';
import Input from '../Input';
import Select from '../Select';

export default function FormArea() {
  return (
    <S.Wrapper>
      <Container>
        <form>
          <Select label="País" id="countries" />
          <Input
            id="local"
            label="Local"
            placeholder="Digite o local que deseja conhecer"
          />
          <Input id="goal" label="Meta" placeholder="mês/ano" />
          <button type="submit">Adicionar</button>
        </form>
      </Container>
    </S.Wrapper>
  );
}
