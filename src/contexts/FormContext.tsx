'use client';

import { createContext, useContext, useReducer, FC, ReactNode } from 'react';

type PersonalInfo = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

type FormState = {
  selectedShelterId: string | null;
  selectedShelterName: string | null;
  searchValue: string;
  amount: number;
  personalInfo: PersonalInfo;
  shelterSelectionType: 'one' | 'all';
  shelterSelectionLabel: string;
  agreedToTerms: boolean;
};

type FormAction =
  | { type: 'SET_SHELTER_ID'; payload: string | null }
  | { type: 'SET_SHELTER_NAME'; payload: string | null }
  | { type: 'SET_SEARCH_VALUE'; payload: string }
  | { type: 'SET_AMOUNT'; payload: number }
  | { type: 'SET_PERSONAL_INFO'; payload: PersonalInfo }
  | { type: 'SET_SHELTER_SELECTION_TYPE'; payload: 'one' | 'all' }
  | { type: 'SET_SHELTER_SELECTION_LABEL'; payload: string }
  | { type: 'SET_AGREED_TO_TERMS'; payload: boolean };

type FormContextValue = {
  state: FormState;
  dispatch: React.Dispatch<FormAction>;
  setSelectedShelterId: (id: string | null) => void;
  setSelectedShelterName: (name: string | null) => void;
  setSearchValue: (value: string) => void;
  setAmount: (amount: number) => void;
  setPersonalInfo: (info: PersonalInfo) => void;
  setShelterSelectionType: (type: 'one' | 'all') => void;
  setShelterSelectionLabel: (label: string) => void;
  setAgreedToTerms: (agreed: boolean) => void;
  triggerValidation: () => Promise<void>;
  registerTrigger: (trigger: () => Promise<boolean>) => void;
};

const initialState: FormState = {
  selectedShelterId: null,
  selectedShelterName: null,
  searchValue: '',
  amount: 10,
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  },
  shelterSelectionType: 'one',
  shelterSelectionLabel: 'Finančný príspevok konkrétnemu útulku',
  agreedToTerms: false,
};

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case 'SET_SHELTER_ID':
      return { ...state, selectedShelterId: action.payload };
    case 'SET_SHELTER_NAME':
      return { ...state, selectedShelterName: action.payload };
    case 'SET_SEARCH_VALUE':
      return { ...state, searchValue: action.payload };
    case 'SET_AMOUNT':
      return { ...state, amount: action.payload };
    case 'SET_PERSONAL_INFO':
      return { ...state, personalInfo: action.payload };
    case 'SET_SHELTER_SELECTION_TYPE':
      return { ...state, shelterSelectionType: action.payload };
    case 'SET_SHELTER_SELECTION_LABEL':
      return { ...state, shelterSelectionLabel: action.payload };
    case 'SET_AGREED_TO_TERMS':
      return { ...state, agreedToTerms: action.payload };
    default:
      return state;
  }
};

const FormContext = createContext<FormContextValue | undefined>(undefined);

export const FormProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const triggerRef = { current: async () => true };

  const setSelectedShelterId = (id: string | null) => {
    dispatch({ type: 'SET_SHELTER_ID', payload: id });
  };

  const setSelectedShelterName = (name: string | null) => {
    dispatch({ type: 'SET_SHELTER_NAME', payload: name });
  };

  const setSearchValue = (value: string) => {
    dispatch({ type: 'SET_SEARCH_VALUE', payload: value });
  };

  const setAmount = (amount: number) => {
    dispatch({ type: 'SET_AMOUNT', payload: amount });
  };

  const setPersonalInfo = (info: PersonalInfo) => {
    dispatch({ type: 'SET_PERSONAL_INFO', payload: info });
  };

  const setShelterSelectionType = (type: 'one' | 'all') => {
    dispatch({ type: 'SET_SHELTER_SELECTION_TYPE', payload: type });
  };

  const setShelterSelectionLabel = (label: string) => {
    dispatch({ type: 'SET_SHELTER_SELECTION_LABEL', payload: label });
  };

  const setAgreedToTerms = (agreed: boolean) => {
    dispatch({ type: 'SET_AGREED_TO_TERMS', payload: agreed });
  };

  const registerTrigger = (trigger: () => Promise<boolean>) => {
    triggerRef.current = trigger;
  };

  const triggerValidation = async () => {
    await triggerRef.current();
  };

  return (
    <FormContext.Provider
      value={{
        state,
        dispatch,
        setSelectedShelterId,
        setSelectedShelterName,
        setSearchValue,
        setAmount,
        setPersonalInfo,
        setShelterSelectionType,
        setShelterSelectionLabel,
        setAgreedToTerms,
        triggerValidation,
        registerTrigger,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = (): FormContextValue => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within FormProvider');
  }
  return context;
};
