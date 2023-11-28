import React, { InputHTMLAttributes, Dispatch, SetStateAction } from 'react';


export interface ButtonProps {
    id: string;
    type: 'blue' | 'red';
    active?: boolean;
    label?: string;
    onClick?: () => void;
    children?: React.ReactNode;
  }

export interface CircleButtonProps {
    id: string;
    label?: any;
    icon:any;
    buttonColor: any;
    onClick?: () => void;
  }
  
  export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label?: string;
    value?: string;
    type?: string;
    name?: string;
    placeholder?: string;
    register?: any;
    error?: string;
    onChange?: (e?: any) => void;
  }
  
  export interface SearchBarProps {
    onSearch: (searchTerm: any) => void;
  }

  export interface MessangerModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    children?: React.ReactNode;
  }
  

  export interface ChatGroupProps {
    onClick: () => void;
    showImage: boolean;
    inChatRoom: boolean;
  }
    export interface ChatPersonalProps {
      onClick: () => void;
      showImage: boolean;
      inChatRoom: boolean;
      onBackClick: () => void;
    }

export interface CheckButtonProps {
      checked: boolean;
      handleCheck: () => void;
    }

    export interface ToDo {
      title: string;
      date: Date;
      notes: string;
    }
    
    export interface ToDoListProps {
      todos: ToDo[];
      onRemoveTodo: (index: number) => void;
      setTodos: Dispatch<SetStateAction<ToDo[]>>;    
     }
    
    
    export interface ToDoInputProps {
      onAddTodo: (newTodo: { title: string; date: string; notes: string }) => void;
      onClose: () => void;
      newTodo: { title: string; date: string; notes: string };
      setNewTodo: React.Dispatch<React.SetStateAction<{ title: string; date: string; notes: string }>>;
    }
    

    export interface CheckboxInputProps {
      checked: boolean;
      onChange: () => void;
    }

    export interface InfoBlockProps {
      icon: string;
      color: string;
      buttonText: string;
      onClick: () => void;
      daysRemaining?: number;
      description?: string;
    }
    