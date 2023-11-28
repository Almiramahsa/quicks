import { create } from 'zustand';
import axios from 'axios';
import { PostState } from '../utils/api';



export const usePost = create<PostState>((set) => ({
    data: [],
    loading: false,
    error: null,
  

getPost: async (): Promise<void> => {
    set({ loading: true, error: null, data: [] });

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const responseData = response.data;
      set({ data: responseData || [], loading: false, error: null });
    } catch (error : any) {
      set({ data: [], loading: false, error: error.message || 'An error occurred' });
    }
  },
  
}));