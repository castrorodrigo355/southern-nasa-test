import { useState } from 'react';
import { CameraName, Photo, RoverName } from '@/types/photo.interface';
import { useFetch } from '@/hooks/useFetch';
import { Flex, VStack } from '@chakra-ui/react';
import { DataGrid } from '../DataGrid';
import { CustomSelect } from '../CustomSelect';
import { Loader } from '../Loader';
import { getDistinctDates, getFilteredData } from '@/helpers';
import InfiniteScroll from 'react-infinite-scroll-component';
import { TextInput } from '../TextInput';
import { GridFilters } from '../GridFilters';

interface MarsProps {
  name: RoverName;
  status: RoverName;
}

export const Mars = ({ name, status }: MarsProps) => {
  const hook = useFetch<Photo, RoverName>(name);
  const { loading, error, getData, data, rest } = hook;

  const [rover, setRover] = useState<CameraName>(CameraName.Select);
  const [date, setDate] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');

  const onChangeCamera = (value: CameraName) => setRover(value as CameraName);
  const onChangeDate = (value: string) => setDate(value);

  const availableData = name === status && data.length > 0;
  const canFetchData =
    name === status && rover === CameraName.Select && fullName === '';
  const filteredData = getFilteredData(data, rover, fullName);

  if (loading) return <Loader />;
  return (
    <VStack>
      <GridFilters>
        <Flex direction={{ sm: 'column', md: 'row' }}>
          <CustomSelect<CameraName>
            label='Select Camera'
            options={Object.values(CameraName)}
            value={rover}
            onChange={onChangeCamera}
          />
          <CustomSelect<string>
            label='Select Date'
            options={getDistinctDates(data)}
            value={rover}
            onChange={onChangeDate}
          />
        </Flex>
        <TextInput
          label='Select Date'
          placeholder='Search Full Name'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </GridFilters>
      {availableData && (
        <InfiniteScroll
          style={{ paddingBottom: '1rem' }}
          dataLength={data.length ?? 0}
          next={() => canFetchData && getData(name)}
          hasMore={!!rest}
          loader={filteredData.length > 0 && loading && <Loader />}
        >
          <DataGrid data={filteredData} />
        </InfiniteScroll>
      )}
    </VStack>
  );
};
