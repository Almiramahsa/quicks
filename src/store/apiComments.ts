import { create } from 'zustand';
import axios from 'axios';
import { CommentState } from '../utils/api';

export const useComments = create<CommentState>((set) => ({
  data: [],
  loading: false,
  error: null,

  getComment: async (): Promise<void> => {
    set({ loading: true, error: null, data: [] });

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=10');
      const responseData = response.data;
      set({ data: responseData || [], loading: false, error: null });
    } catch (error : any) {
      set({ data: [], loading: false, error: error.message || 'An error occurred' });
    }
  },
}));
