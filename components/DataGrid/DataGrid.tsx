import { isFavorite } from '@/helpers';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Photo } from '@/types/photo.interface';
import { Grid } from '@chakra-ui/react';
import { GridItem as GridItemElement } from '../GridItem';

interface DataGridProps {
  data: Photo[];
}

export const DataGrid = ({ data }: DataGridProps): JSX.Element => {
  const { favorites, onClickFavorite } = useLocalStorage<number>(
    'favorites',
    []
  );

  return (
    <Grid display='flex' flexWrap='wrap' placeContent='center' gap={6}>
      {data.map((item) => (
        <GridItemElement
          key={item.id}
          item={item}
          favorite={isFavorite(favorites, item.id)}
          onClickFavorite={() => onClickFavorite(item.id)}
        />
      ))}
    </Grid>
  );
};
