'use client';

import { FC } from 'react';
import { Loader } from '@mantine/core';
import { StyledSearchSelect } from './SearchSelect.styles';

export type SearchSelectItem = {
  label: string;
  value: string;
};

type SearchSelectProps = {
  value?: string | null;
  onChange?: (value: string | null) => void;
  onSearchChange?: (value: string) => void;
  data: SearchSelectItem[];
  label?: React.ReactNode;
  placeholder?: string;
  required?: boolean;
  isLoading?: boolean;
  isError?: boolean;
  searchValue?: string;
  error?: string;
};

export const SearchSelect: FC<SearchSelectProps> = ({
  value,
  onChange,
  onSearchChange,
  data,
  label,
  placeholder,
  required,
  isLoading,
  isError,
  searchValue,
  error,
}) => {
  return (
    <StyledSearchSelect
      placeholder={placeholder}
      data={data}
      value={value ?? undefined}
      onChange={onChange}
      searchable
      searchValue={searchValue}
      onSearchChange={onSearchChange}
      nothingFoundMessage={isError ? 'Chyba pri načítaní' : 'Nenájdené'}
      rightSection={isLoading ? <Loader size="xs" /> : null}
      label={label}
      clearable
      required={required}
      disabled={isError}
      error={error}
    />
  );
};
