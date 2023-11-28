import { FC, useState } from 'react';
import { Icon } from '@iconify/react';
import { SearchBarProps } from '../../utils/component';



const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
    onSearch(searchTerm);
  };



  return (
    <div className="flex items-center relative w-auto">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
        className="border rounded border-quicks-primary-black text-quicks-primary-black px-2 py-1 pr-8 w-full" 
        />
      <button
        onClick={handleSearch}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
      >
        <Icon icon="material-symbols-light:search" />
      </button>
    </div>
  );
};

export default SearchBar;
