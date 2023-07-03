import { render, screen } from '@testing-library/react';
import { DataGrid } from '../../components/DataGrid';
import { data } from './data';

describe('<DataGrid />', () => {
  test('1. Snapshot: ', () => {
    const { container } = render(<DataGrid data={data} />);
    expect(container).toMatchSnapshot();
  });

  test('2. Should display heading: ', () => {
    render(<DataGrid data={data} />);
    const images = screen.getAllByRole('img');
    expect(images).toBeTruthy();
    expect(images.length).toBeGreaterThan(0);
  });
});
