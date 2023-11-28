export type CommentState = {
    data: any[];
    loading: boolean;
    error: string | null;

    getComment: () => Promise<void>; 
  };

  export type PostState = {
    data: any[];
    loading: boolean;
    error: string | null;
  
    getPost: () => Promise<void>; 
  };

  export type UserState = {
    data: any[];
    error: string | null;
    size: number;
    getUser: () => Promise<void>; 
  };

  export type TodoState = {
    data: any[];
    loading: boolean;
    error: string | null;
  
    getPost: () => Promise<void>; 
  };