import { render, screen } from '@testing-library/react';
import { Title } from '@/components/Title';

describe('<Title />', () => {
  const title = 'My New Title';

  test('Should display custom title: ', () => {
    render(<Title title={title} />);

    const heading = screen.getByRole('heading', {
      level: 1,
    });

    expect(heading).toBeTruthy();
    expect(heading.innerHTML).toBe(title);
  });
});
