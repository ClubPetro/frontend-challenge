import React from 'react';
import Clear from '../../assets/img/icon-delete.png';

import * as S from './styled';

interface ModalProps {
  onClose?: any;
  children: React.ReactNode;
  size?: number;
  full?: boolean;
  fullresp?: boolean;
  height?: string;
  noBackground?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  children,
  full,
  fullresp,
  height,
  noBackground,
  size,
}) => {
  return (
    <S.Modal noBackground={noBackground}>
      <S.ModalContainer
        full={full}
        fullresp={fullresp}
        size={size}
        noBackground={noBackground}
      >
        <S.ButtonClose onClick={onClose}>
          <img src={Clear} alt="clear" />
        </S.ButtonClose>

        <S.ModalContent height={height}>{children}</S.ModalContent>
      </S.ModalContainer>
    </S.Modal>
  );
};

export default Modal;
