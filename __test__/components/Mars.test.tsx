import { render, screen } from '@testing-library/react';
import { Mars } from '@/components/Mars';
import { RoverName } from '@/types/photo.interface';

describe('<Mars />', () => {
  const loading = 'Loading...';

  test('Should display loading: ', () => {
    jest.mock('../../hooks/useFetch', () => ({
      data: [],
      loading: true,
      error: undefined,
    }));

    render(<Mars name={RoverName.Curiosity} status={RoverName.Curiosity} />);

    const loadingSpan = screen.getByText(loading);
    expect(loadingSpan).toBeTruthy();
    expect(loadingSpan.innerHTML).toContain(loading);
  });
});
