import styled from 'styled-components';
import { Form } from '@unform/web';

export const FormEdit = styled(Form)`
  display: flex;
  flex-direction: column;

  input {
    border: 1px solid #848484;
    width: 400px;

    & + input {
      margin-top: 8px;
    }
  }
`;
