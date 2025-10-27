'use client';

import { createContext, useContext, useState, FC, ReactNode } from 'react';

type FormContextValue = {
  selectedShelterId: string | null;
  setSelectedShelterId: (id: string | null) => void;
};

const FormContext = createContext<FormContextValue | undefined>(undefined);

export const FormProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedShelterId, setSelectedShelterId] = useState<string | null>(null);

  return <FormContext.Provider value={{ selectedShelterId, setSelectedShelterId }}>{children}</FormContext.Provider>;
};

export const useFormContext = (): FormContextValue => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within FormProvider');
  }
  return context;
};
