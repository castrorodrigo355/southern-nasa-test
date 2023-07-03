import { Box, Spinner } from '@chakra-ui/react';

export const Loader = (): JSX.Element => (
  <Box w='100%' p='2rem' textAlign='center'>
    <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
    />
  </Box>
);
