import './App.css';
import CircleButton from './components/CircleButton';
import strom from '../src/assets/icons/strom.svg'
import message from '../src/assets/icons/question_answer_24px.svg'
import todo from '../src/assets/icons/chrome_reader_mode_24px.svg'
import todoSelected from '../src/assets/icons/selected_chrome_reader_mode_24px.svg'

import messageSelected from  '../src/assets/icons/selected_question_answer_24px.svg'

function App() {
  const handleButtonClick = () => {
    console.log('CircleButton diklik!');
  };

  return (
    <>
     <h1 className='font-thin text-blue-400'>Quicks</h1>
     <CircleButton
        id="circle-button-primary"
        label={[
          { label: 'todo', imgSrc: todo, selectedImgSrc: todoSelected, backgroundColor:  'bg-yellow-500' },
          { label: 'messenger', imgSrc: message, selectedImgSrc: messageSelected, backgroundColor: 'bg-purple-500' }
        ]
        }
        onClick={handleButtonClick}
        icon={strom} 
        buttonColor="quicks-primary-blue"      
      />
    </>
  );
}

export default App;
