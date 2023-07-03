import { fireEvent, render, screen } from '@testing-library/react';
import { GridItem } from '../../components/GridItem';
import { data } from './data';

describe('<GridItem />', () => {
  const mockFn = jest.fn();

  test('1. Snapshot: ', () => {
    const { container } = render(<GridItem item={data[0]} favorite={false} />);
    expect(container).toMatchSnapshot();
  });

  test('2. Should display heading: ', () => {
    render(<GridItem item={data[0]} favorite={false} />);
    const heading = screen.getByRole('heading', {
      level: 2,
    });
    expect(heading.innerHTML).toBe('Front Hazard Avoidance Camera');
  });

  test('3. Should display image: ', () => {
    render(<GridItem item={data[0]} favorite={false} />);
    const { src } = screen.getByRole('img') as HTMLImageElement;
    expect(src).toBeTruthy();
    expect(src).toContain('mars.jpl.nasa');
  });

  test('4. Should trigger onClick event: ', () => {
    render(
      <GridItem item={data[0]} favorite={false} onClickFavorite={mockFn} />
    );
    const btnIcon = screen.getByRole('group');
    fireEvent.click(btnIcon);
    fireEvent.click(btnIcon);
    fireEvent.click(btnIcon);
    expect(btnIcon).toBeTruthy();
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledTimes(3);
  });
});
