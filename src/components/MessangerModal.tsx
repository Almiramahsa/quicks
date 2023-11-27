import { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MessangerModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children?: React.ReactNode;

}

const MessangerModal: FC<MessangerModalProps> = ({ isOpen, onRequestClose, children }) => {
  const modalOverlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalContentVariants = {
    hidden: { scale: 0.8 },
    visible: { scale: 1 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0  flex items-end justify-end pb-40 pr-20  z-50 bg-quicks-primary-black bg-opacity-50"
          onClick={onRequestClose}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalOverlayVariants}
        >
            <motion.div
            className="bg-white p-4 rounded-md shadow-md grid justify-items-center w-96 h-80"
            onClick={(event) => event.stopPropagation()}
            initial="hidden"
            animate="visible"
            variants={modalContentVariants}
            >
            {children}
            </motion.div>



        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MessangerModal;
