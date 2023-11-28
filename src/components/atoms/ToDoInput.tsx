import { FC, useState } from 'react';
import { ToDoInputProps, ToDo } from '../../utils/component';

const ToDoInput: FC<ToDoInputProps> = ({ onAddTodo, onClose }) => {
  const [localNewTodo, setLocalNewTodo] = useState({
    title: '',
    date: '',
    notes: '',
  });

  const handleAddTodo = () => {
    if (localNewTodo.title.trim() !== '' && localNewTodo.date.trim() !== '') {
      onAddTodo({ ...localNewTodo });

      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]') as ToDo[];
      localStorage.setItem('tasks', JSON.stringify([...storedTasks, { ...localNewTodo }]));

      setLocalNewTodo({
        title: '',
        date: '',
        notes: '',
      });
      onClose();
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={localNewTodo.title}
          onChange={(e) => setLocalNewTodo({ ...localNewTodo, title: e.target.value })}
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          className="p-2 border border-quicks-primary-black"
          type="date"
          value={localNewTodo.date}
          onChange={(e) => setLocalNewTodo({ ...localNewTodo, date: e.target.value })}
        />
      </div>
      <div>
        <label>Notes:</label>
        <textarea
          value={localNewTodo.notes}
          onChange={(e) => setLocalNewTodo({ ...localNewTodo, notes: e.target.value })}
        />
      </div>
      <button onClick={handleAddTodo}>Add</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ToDoInput;
