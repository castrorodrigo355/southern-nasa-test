import { renderHook, waitFor } from '@testing-library/react';
import { RoverName } from '@/types/photo.interface';
import { useFetch } from '../../hooks/useFetch';

// jest.mock('../../hooks/useFetch');

describe('useFetch: ', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('1. UseFetch before get data: ', () => {
    const { result } = renderHook(() => useFetch(RoverName.Curiosity));
    const { loading, data } = result.current;

    expect(data.length).toBe(0);
    expect(loading).toBeTruthy();
  });

  test('2. Should return data list: ', async () => {
    const { result } = renderHook(() => useFetch(RoverName.Curiosity));
    await waitFor(() =>
      expect(result.current.data.length).toBeGreaterThanOrEqual(0)
    );
    const { data, loading } = result.current;

    expect(data.length).toBeGreaterThanOrEqual(0);
  });
});
