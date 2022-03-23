import React, { useEffect, useRef, useState } from 'react';
import { closeIcon } from 'src/assets/svg';
import { Wrapper } from './styles';
import InputMask from 'react-input-mask';
import { Button, InputBase } from '@mui/material';

function Modal({ modalData, setModalData, values, handleEdit }: any) {
  const localInputRef = useRef<any>(null);
  const metaInputRef = useRef<any>(null);

  const [renderInputs, setRenderInputs] = useState(false);

  useEffect(() => {
    if (modalData.open) {
      document.body.style.overflow = 'hidden';
      document.querySelector('#modal__wrapper')?.classList.add('active');
    } else {
      document.body.style.overflow = 'auto';
      document.querySelector('#modal__wrapper')?.classList.remove('active');
    }

    if (modalData.dataId && modalData.open) {
      const value = values.find((value: any) => value.id === modalData.dataId);

      localInputRef.current = value.local;
      metaInputRef.current = value.meta;

      setRenderInputs(true);
    } else {
      if (renderInputs) {
        setRenderInputs(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalData, values]);

  return (
    <div id='modal__wrapper'>
      <Wrapper open={modalData.open}>
        <img
          loading='lazy'
          width='15'
          src={closeIcon}
          onClick={() => {
            setModalData((current: any) => ({ ...current, open: false }));
          }}
          alt='Close'
        />

        {renderInputs && (
          <>
            <span>Local</span>

            <InputBase
              defaultValue={localInputRef.current}
              onChange={(event: any) => {
                localInputRef.current = event.target.value;
              }}
              placeholder='Digite o local que deseja conhecer'
              sx={customInputStyle}
            />

            <span>Meta</span>

            <InputMask
              mask='99/9999'
              defaultValue={metaInputRef.current}
              onChange={(event: any) => {
                metaInputRef.current = event.target.value;
              }}
            >
              {() => <InputBase placeholder='mês/ano' sx={customInputStyle} />}
            </InputMask>

            <Button
              sx={customButtonStyle}
              onClick={() =>
                handleEdit({
                  local: localInputRef.current,
                  meta: metaInputRef.current
                })
              }
              variant='contained'
            >
              Editar
            </Button>
          </>
        )}
      </Wrapper>
    </div>
  );
}

const customInputStyle = {
  background: '#f5f5f5',
  borderRadius: 1.5,
  height: 50,
  width: '1',
  paddingLeft: '10px'
};

const customButtonStyle = {
  borderRadius: 1.5,
  background: '#006C18',
  fontWeight: 'normal',
  fontSize: 16,
  textTransform: 'capitalize',
  boxShadow: 0,
  height: 50,
  width: 0.5,
  marginTop: '20px',
  alignSelf: 'center',
  ':hover': {
    background: '#0e7d28',
    boxShadow: 0
  }
};

export default Modal;
