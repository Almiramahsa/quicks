import { Icon } from '@iconify/react/dist/iconify.js';
import  { useState } from 'react';

const DropdownToDo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative '>
      <button onClick={toggleDropdown} className='border justify-start border-quicks-primary-black p-2 rounded-md flex items-center '>
        <span className='mr-2 text-base'>My Task</span>
        <Icon icon="formkit:down" width="9" height="9" />
      </button>
      {isOpen && (
        <ul className='relative bg-white border border-quicks-primary-black p-1 rounded-md text-base text-quicks-primary-black mt-2'>
        <li className='py-1'>Personal Errands</li>
        <li className='border-t border-quicks-primary-black py-1'>Urgent To-Do</li>
      </ul>
      )}
    </div>
  );
};

export default DropdownToDo;
