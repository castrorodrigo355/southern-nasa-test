/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export function useFetch<T, U>(rover: U) {
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>();
  const [data, setData] = useState<T[]>([]);
  const [rest, setRest] = useState<T[] | undefined>([]);

  const getData = async (roverParam: U): Promise<void> => {
    if (!rest) return;
    setError(undefined);
    try {
      const URI = `${BASE_URL}/${roverParam}/photos?sol=1000&page=${page}&api_key=${API_KEY}`;
      const fetchData = await fetch(URI);
      const response = await fetchData.json();
      setPage((p) => p + 1);
      setData(data.concat(response.photos as T));
      if (response.photos.length === 0) {
        setRest(undefined);
      }
    } catch (error) {
      console.log('ERROR: ', error);
      setError('Error !!!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData(rover);
  }, [rover]);

  return {
    loading,
    error,
    getData,
    data,
    rest,
  };
}
