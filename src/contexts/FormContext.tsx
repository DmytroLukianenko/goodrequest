'use client';

import { createContext, useContext, useState, FC, ReactNode } from 'react';

type FormContextValue = {
  selectedShelterId: string | null;
  setSelectedShelterId: (id: string | null) => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
  amount: number;
  setAmount: (amount: number) => void;
};

const FormContext = createContext<FormContextValue | undefined>(undefined);

export const FormProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedShelterId, setSelectedShelterId] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState('');
  const [amount, setAmount] = useState<number>(10);

  return <FormContext.Provider value={{ selectedShelterId, setSelectedShelterId, searchValue, setSearchValue, amount, setAmount }}>{children}</FormContext.Provider>;
};

export const useFormContext = (): FormContextValue => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within FormProvider');
  }
  return context;
};
