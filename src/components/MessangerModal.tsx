import  { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessangerModalProps } from '../utils/component';
import ChatGroup from './atoms/ChatGroup';
import SearchBar from '../components/atoms/SearchBar';
import ChatPersonal from './atoms/ChatPersonal';
import ChatRoom from '../components/components/ChatRoom';
import Chat from '../components/atoms/Chat'; 



const MessangerModal: FC<MessangerModalProps> = ({ isOpen, onRequestClose, children }) => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  const modalOverlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const handleSearch = (searchTerm: any) => {
    console.log('Searching for:', searchTerm);
  };

  const handleChatClick = (chatType: string) => {
    setSelectedChat(chatType);
  };

  const handleBackButtonClick = () => {
    setSelectedChat(null);
  };

  const modalContentVariants = {
    hidden: { scale: 0.8 },
    visible: { scale: 1 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-end justify-end pb-24 pr-20 z-50 bg-quicks-primary-black bg-opacity-50"
          onClick={onRequestClose}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalOverlayVariants}
        >
          <motion.div
            className="bg-white p-4 rounded-md shadow-md grid justify-items-center w-[35rem] h-[32rem]"
            onClick={(event) => event.stopPropagation()}
            initial="hidden"
            animate="visible"
            variants={modalContentVariants}
          >
            {children}

            {selectedChat === null && (
              <>
               <SearchBar onSearch={handleSearch} />
            <ChatGroup onClick={() => handleChatClick('group1')} showImage={true} inChatRoom={false}/>
            <ChatGroup onClick={() => handleChatClick('group2')} showImage={true} inChatRoom={false}/>
            <ChatPersonal
              onClick={() => handleChatClick('personal')}
              showImage={true}
              inChatRoom={false}
              onBackClick={handleBackButtonClick} 
              />
             </>
            )}

            {selectedChat && selectedChat !== 'personal' && (
              <Chat />
            )}

            {selectedChat === 'group1' && (
              <motion.div key="chatGroup1">
                <ChatGroup onClick={() => handleChatClick('group1')} showImage={false} inChatRoom={true} />
              </motion.div>
            )}

            {selectedChat === 'group2' && (
              <motion.div key="chatGroup2">
                <ChatGroup onClick={() => handleChatClick('group2')} showImage={false} inChatRoom={true}/>
              </motion.div>
            )}

        {selectedChat === 'personal' && (
            <motion.div key="chatPersonal">
              <ChatPersonal
                onClick={() => handleChatClick('personal')}
                showImage={false}
                inChatRoom={true}
                onBackClick={handleBackButtonClick} 
              />
            </motion.div>
          )}

            {selectedChat && (
              <motion.div key="chatRoom">
                <ChatRoom />
                <button onClick={handleBackButtonClick}>Back</button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MessangerModal;
