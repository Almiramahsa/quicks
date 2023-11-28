import { create } from 'zustand';
import axios from 'axios';
import { TodoState } from '../utils/api';



export const useTodo = create<TodoState>((set) => ({
    data: [],
    loading: false,
    error: null,
  

getPost: async (): Promise<void> => {
    set({ loading: true, error: null, data: [] });

    try {
      const response = await axios.get('https://dummyjson.com/todos');
      const responseData = response.data;
      set({ data: responseData || [], loading: false, error: null });
    } catch (error : any) {
      set({ data: [], loading: false, error: error.message || 'An error occurred' });
    }
  },
  
}));