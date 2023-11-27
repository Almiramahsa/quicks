import React, { InputHTMLAttributes } from 'react';


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