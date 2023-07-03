import { Box, Select } from '@chakra-ui/react';
import styles from './styles.module.css';

type OptionTypes = string | number | readonly string[] | undefined;

interface CustomSelectProps<T> {
  label: string;
  options: T[];
  value?: T;
  onChange: (v: T) => void;
}

export function CustomSelect<T extends OptionTypes>({
  label,
  value,
  options,
  onChange,
}: CustomSelectProps<T>) {
  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = options.find((option) => option === (e.target.value as T));
    if (val) onChange(val as T);
  };

  return (
    <Box
      //  m='0 0 1rem 0.5rem'
      m='1rem'
      borderRadius={10}
    >
      <Box px='0.2rem' py='0.5rem'>
        {label}
      </Box>
      {value && (
        <Select
          className={styles.basicsingle}
          border='1px solid gray'
          value={value}
          onChange={onSelectChange}
          variant='outline'
          bgColor='none'
          fontSize='20px'
          fontFamily='Montserrat Bold'
          borderRadius={10}
          width={250}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </Select>
      )}
    </Box>
  );
}
