import * as Yup from 'yup';

export default Yup.object().shape({
  local: Yup.string().required('Local é obrigatório'),
  goal: Yup.string().required('Meta é obrigatório'),
});
