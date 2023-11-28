import { FC } from 'react';
import { formatDistanceToNow, addDays } from 'date-fns';
import { ToDoListProps } from '../../utils/component';

const ToDoList: FC<ToDoListProps> = ({ todos, onRemoveTodo }) => {
    const calculateRemainingDays = (date: Date) => {
      const today = new Date();
      const deadline = new Date(date);
      return formatDistanceToNow(addDays(deadline, -1 * today.getTimezoneOffset() / 60), {
        addSuffix: true,
      });
    };
  
    return (
      <ul>
        {todos && todos.map((todo, index) => (
          <li key={index}>
            <strong>{todo.title}</strong>
            <p>Date: {todo.date.toLocaleDateString()}</p>
            <p>Notes: {todo.notes}</p>
            <p>Remaining Days: {calculateRemainingDays(todo.date)}</p>
            <button onClick={() => onRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default ToDoList;