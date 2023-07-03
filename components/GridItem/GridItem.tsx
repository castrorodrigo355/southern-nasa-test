import { Photo } from '@/types/photo.interface';
import { Animation } from '../Animation';
import {
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';

interface GridItemProps {
  item: Photo;
  favorite: boolean;
  onClickFavorite?: () => void;
}

export const GridItem = ({
  item,
  favorite,
  onClickFavorite,
}: GridItemProps): JSX.Element => (
  <Card maxW='md' boxShadow='0px 15px 11px 3px rgba(0,0,0,0.1)'>
    <CardBody>
      <VStack alignItems='flex-start' justifyContent='space-between' h={400}>
        <Image
          src={item.img_src}
          alt={'...'}
          width={300}
          height={300}
          priority
        />
        <Stack mt={2}>
          <Heading size='md'>{item.camera.full_name}</Heading>
          <Text>Sol: {item.sol}</Text>
          <Text>Earth Date: {item.earth_date.toLocaleString()}</Text>
        </Stack>
      </VStack>
    </CardBody>
    <Divider />
    <CardFooter justifyContent='space-between' pos='relative'>
      <Text color='blue.600' fontSize='2xl'>
        Camera: {item.camera.name}
      </Text>
      <ButtonGroup onClick={onClickFavorite} cursor='pointer'>
        <Animation color={'yellow.500'} animation={favorite} />
        <Animation color={'rgb(183 177 177 / 48%)'} animation={!favorite} />
      </ButtonGroup>
    </CardFooter>
  </Card>
);
