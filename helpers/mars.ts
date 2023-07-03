import { CameraName, Photo } from '@/types/photo.interface';

export const getFilteredData = (
  data: Photo[],
  rover: CameraName,
  fullName: string
): Photo[] => {
  const initialFilter =
    rover === CameraName.Select
      ? data
      : data.filter(
          (element) => element.camera.name.toLowerCase() === rover.toLowerCase()
        );

  const finalFilter =
    fullName === ''
      ? initialFilter
      : initialFilter.filter((element) =>
          element.camera.full_name
            .toLowerCase()
            .includes(fullName.toLowerCase())
        );
  return finalFilter;
};

export const getDistinctDates = (data: Photo[]): string[] => {
  return [...new Set(data.map((item) => item.earth_date.toString()))];
};
