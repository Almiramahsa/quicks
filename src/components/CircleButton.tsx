import { FC, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CircleButtonProps } from '../utils/component';
import MessengerModal from './MessangerModal';
import TodoModal from './ToDoModal';


const CircleButton: FC<CircleButtonProps> = ({ id, label, onClick, icon, buttonColor }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmenuClick = (itemLabel: string) => {
    setSelectedItem(itemLabel);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setIsOpen(false);
  };

  return (
    <div className="fixed-bottom">
      <button
        id={id}
        className={`flex items-center justify-center bg-quicks-primary-blue w-20 h-20 rounded-full focus:outline-none border-none fixed bottom-4 mb-8 mr-4 right-4 ${isOpen ? 'hidden' : ''}`}
        onClick={() => toggleMenu()}
      >
        <img
          src={icon}
          alt='Icon'
          className="w-10 h-10 object-center"
        />
      </button>
      <AnimatePresence>
        {(isOpen || selectedItem) && (
          <motion.div
            initial={{ opacity: 0, y: 0, x: 0, rotate: 45 }}
            animate={{ opacity: 1, y: 5, rotate: 0 }}
            exit={{ opacity: 0, y: 5, rotate: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClick}
            className="flex items-center justify-center absolute bottom-4 right-4 p-2"
          >
            {label &&
              label.map((item: any, index: any) => (
                <div
                  key={index}
                  className={`flex items-center justify-center mx-4 w-16 h-16 rounded-full focus:outline-none border-none ${selectedItem === item.label ? `${item.backgroundColor} shadow-md` : buttonColor} hover:bg-health-blue-dark hover:text-white`}
                  onClick={() => handleSubmenuClick(item.label)}
                  style={{
                    position: 'relative',
                    ...((selectedItem === item.label) && {
                      boxShadow: '-14px 1px 0px rgba(79, 79, 79, 1)',
                    }),
                  }}
                >
                  <img
                    src={selectedItem === item.label ? item.selectedImgSrc : item.imgSrc}
                    alt={item?.label}
                    className="w-8 h-8 object-center"
                  />
                </div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
      {selectedItem === 'messenger' && (
        <MessengerModal isOpen={!!selectedItem} onRequestClose={handleCloseModal} />
      )}
      {selectedItem === 'todo' && (
        <TodoModal isOpen={!!selectedItem} onRequestClose={handleCloseModal} />
      )}
    </div>
  );
};

export default CircleButton;