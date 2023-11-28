import { create } from 'zustand';
import axios from 'axios';
import { UserState } from '../utils/api';

export const useUser = create<UserState>((set) => ({
  data: [],
  error: null,
  size: 10,

  getUser: async (): Promise<void> => {
    set({  error: null, data: [] });

    try {
      const response = await axios.get('https://random-data-api.com/api/users/random_user?size=10');
      const responseData = response.data;
      set({ data: responseData || [],  error: null });
    } catch (error: any) {
      set({ data: [],  error: error.message || 'An error occurred' });
    }
  },
}));
