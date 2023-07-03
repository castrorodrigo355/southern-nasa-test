import { ChangeEvent } from 'react';
import { Input } from '@chakra-ui/react';

interface TextInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({
  placeholder,
  value,
  onChange,
}: TextInputProps): JSX.Element => {
  return (
    <Input
      //   m='1rem 0 1rem 0.5rem'
      m='1rem'
      w={250}
      minW={250}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      borderColor='gray'
      borderRadius={10}
    />
  );
};
