import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ContainerStyled } from './styles'
import { InputComp, ButtonComp } from '../../'
import { useContext } from "react";
import { CountrieContext } from "../../../contexts/CardsInfos";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface PropsModal {
  
}

const BasicModal: React.FC<PropsModal> = ({}) => {
  const { register, handleSubmit, onSubmitEditCard, openEditModal, handleCloseEditModal } = useContext(CountrieContext);

  return (
    <Modal
      open={openEditModal}
      onClose={handleCloseEditModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={handleSubmit(onSubmitEditCard)}>
          <ContainerStyled>
              <InputComp 
                idInput={'countries'}
                txtPlaceholder={'Digite o nome do País'}
                labelTxt="País"
                register={register('countriesModal')}
              />
              <InputComp 
                idInput={'local'}
                txtPlaceholder={'Digite o local que deseja conhecer'}
                labelTxt="Local"
                register={register('localModal')}
              />
              <InputComp 
                idInput={'goal'}
                txtPlaceholder={'mês/ano'}
                labelTxt="Meta"
                register={register('goalModal')}
              />
              <ButtonComp>Editar</ButtonComp>
          </ContainerStyled>
        </form>
      </Box>
    </Modal>
  );
}

export default BasicModal