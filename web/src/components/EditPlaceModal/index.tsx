import React from 'react';
import { MdEdit } from 'react-icons/md';
import Popup from 'reactjs-popup';


const EditPlaceModal: React.FC = ({ children }) => {
  return (
    <Popup
      trigger={
        <button type="button">
          <MdEdit size={16} color="#868686"/>
        </button>
      }
      modal
      position="center center"
      contentStyle={{
        width: '450px',
        borderRadius: '4px',
        padding: '25px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff'
      }}
      overlayStyle={{
        background: 'rgb(0, 0, 0, 0.7)',
        border: 'rgb(0, 0, 0, 0.7)',
      }}
    >{children}</Popup>
    
  );
}

export default EditPlaceModal;