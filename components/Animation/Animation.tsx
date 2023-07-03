import { StarIcon } from '@chakra-ui/icons';
import { SlideFade, VStack } from '@chakra-ui/react';

export const Animation = ({
  color,
  animation,
}: {
  color: string;
  animation: boolean;
}): JSX.Element => (
  <VStack pos='absolute' right={5}>
    <SlideFade in={animation} reverse offsetX={animation ? '250px' : '-250px'}>
      <StarIcon w={8} h={8} color={color} />
    </SlideFade>
  </VStack>
);
