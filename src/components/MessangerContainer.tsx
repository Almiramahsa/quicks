import { FC, useState } from 'react';
import MessengerModal from './MessangerModal';
import Messenger from './Messanger';

const MessengerContainer: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
  
  
    return (
      <>
        <button onClick={handleOpenModal}>Buka Messenger</button>
  
        <MessengerModal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
          <Messenger  />
        </MessengerModal>
      </>
    );
  };
  

export default MessengerContainer;
