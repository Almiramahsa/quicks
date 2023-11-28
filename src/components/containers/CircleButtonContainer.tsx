import CircleButton from '../CircleButton';
import strom from '../../assets/icons/strom.svg'
import message from '../../assets/icons/question_answer_24px.svg'
import todo from '../../assets/icons/chrome_reader_mode_24px.svg'
import todoSelected from '../../assets/icons/selected_chrome_reader_mode_24px.svg'

import messageSelected from  '../../assets/icons/selected_question_answer_24px.svg'
import ToDoModal from '../ToDoModal'
import MessengerModal from '../MessangerModal'
import React from 'react';
import { ToDo } from '../../utils/component';

const CircleButtonContainer: React.FC = () => {
  const [isMessengerModalOpen, setIsMessengerModalOpen] = React.useState<boolean>(false);
  const [isTodoModalOpen, setIsTodoModalOpen] = React.useState<boolean>(false);
  const [todos, setTodos] = React.useState<ToDo[]>([]); 

  const handleButtonClick = () => {
    console.log('CircleButton diklik!');
  };

  const handleCloseModals = () => {
    setIsMessengerModalOpen(false);
    setIsTodoModalOpen(false);
  };

  return (
    <>
      <CircleButton
        id="circle-button-primary"
        label={[
          { label: 'todo', imgSrc: todo, selectedImgSrc: todoSelected, backgroundColor: 'bg-yellow-500' },
          { label: 'messenger', imgSrc: message, selectedImgSrc: messageSelected, backgroundColor: 'bg-purple-500' }
        ]}
        onClick={handleButtonClick}
        icon={strom} 
        buttonColor= 'quicks-primary-blue'      
      />
      <MessengerModal isOpen={isMessengerModalOpen} onRequestClose={handleCloseModals} />
      <ToDoModal isOpen={isTodoModalOpen} onRequestClose={handleCloseModals} todos={todos} setTodos={setTodos} />
    </>
  );
};

  
  export default CircleButtonContainer;