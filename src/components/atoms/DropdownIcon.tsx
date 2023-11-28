import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';

const DropdownIcon = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleEdit = () => {
    console.log('Edit clicked');
  };

  const handleDelete = () => {
    console.log('Delete clicked');
  };

  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={toggleDropdown}>
        <Icon icon="majesticons:more-menu" width="24" height="24" />
      </div>
      {isDropdownOpen && (
    <div className="absolute mt-2 bg-white border rounded-lg shadow-lg z-10" style={{ left: "20px" }}>
        <button className="block w-full py-2 px-4 text-left font-lato_regular text-quicks-primary-blue" onClick={handleEdit}>
        Edit
        </button>
        <button className="block w-full py-2 px-4 text-left font-lato_regular text-quicks-indicator-red" onClick={handleDelete}>
        Delete
        </button>
    </div>
    )}

    </div>
  );
};

export default DropdownIcon;