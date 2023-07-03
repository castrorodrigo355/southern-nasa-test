import { Flex } from '@chakra-ui/react';

interface GridFiltersProps {
  children?: JSX.Element | JSX.Element[];
}

export const GridFilters = ({ children }: GridFiltersProps): JSX.Element => {
  return (
    <Flex
      mb={2}
      w='100%'
      direction={{ sm: 'column', md: 'column', xl: 'row' }}
      justifyContent={{ md: 'start', xl: 'space-between' }}
      alignItems={{ sm: 'center', md: 'center', xl: 'end' }}
    >
      {children}
    </Flex>
  );
};
