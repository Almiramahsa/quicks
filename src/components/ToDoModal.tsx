import { FC, useState, Dispatch, SetStateAction } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ToDoInput from '../components/atoms/ToDoInput';
import ToDoList from '../components/atoms/ToDoList';
import CheckButton from './atoms/CheckButton';
import DropdownToDo from './atoms/DropdownToDo';
import { ToDo } from '../utils/component';
import ToDoMain from './atoms/ToDoMain';

interface ToDoModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  todos: ToDo[];
  setTodos: Dispatch<SetStateAction<ToDo[]>>;
}

const ToDoModal: FC<ToDoModalProps> = ({ isOpen, onRequestClose, todos, setTodos }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [newTodo, setNewTodo] = useState({ title: '', date: '', notes: '' });
  const [showInputForm, setShowInputForm] = useState(false);

  const handleAddTodo = () => {
    if (newTodo.title.trim() !== '' && newTodo.date.trim() !== '') {
      const newTask: ToDo = { ...newTodo, date: new Date(newTodo.date) };
      setTodos((prevTodos) => [...prevTodos, newTask]);

      localStorage.setItem('tasks', JSON.stringify([...todos, newTask]));

      setNewTodo({ title: '', date: '', notes: '' });
      setShowInputForm(false);
    }
  };

  const handleRemoveTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);

    localStorage.setItem('tasks', JSON.stringify(updatedTodos));
  };

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  const handleToDoMainClick = () => {
    console.log('Button clicked!');
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
        >
          <motion.div
            className="bg-white p-4 rounded-md shadow-md grid justify-items-center w-[35rem] h-[32rem]"
            onClick={(event) => event.stopPropagation()}
            initial="hidden"
            animate="visible"
          >
            <div className="flex justify-between items-start p-4 ">
              <DropdownToDo />

              <div className="flex col items-end ml-24 ">
                {showInputForm && (
                  <ToDoInput
                    onAddTodo={handleAddTodo}
                    onClose={() => setShowInputForm(false)}
                    newTodo={newTodo}
                    setNewTodo={setNewTodo}
                  />
                )}

                <button
                  className="bg-quicks-primary-blue py-2 px-4 text-white text-base rounded-md"
                  onClick={() => setShowInputForm(true)}
                >
                  New Tasks
                </button>
              </div>

              <ToDoList todos={todos} setTodos={setTodos} onRemoveTodo={handleRemoveTodo} />
            </div>
            <div>
            <ToDoMain onClick={handleToDoMainClick} type="done" />
</div>
            <CheckButton checked={isChecked} handleCheck={handleCheck} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ToDoModal;
