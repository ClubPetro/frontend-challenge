import React from 'react';

import { Container } from './styles';

const Form: React.FC = () => {
  return (
    <Container>
      <form>
        <div className="field-group">
          <label>País</label>
          <select  name="country" id="country" placeholder="Selecione...">
            <option disabled selected >Selecione...</option>
            <option value="some value">Some value</option>
            <option value="some value">Some value</option>
            <option value="some value">Some value</option>
            <option value="some value">Some value</option>
          </select>
        </div>

        <div className="field-group">
           <label>Local</label>
          <input name="local" placeholder="Digite o local que deseja conhecer" value="" id="local" />
        </div>
        <div className="field-group">
          <label>Meta</label>
          <input placeholder="mês/ano" id="meta"/>
        </div>

        <button type="submit">Adicionar</button>

      </form>
    </Container>
  );
}

export default Form;