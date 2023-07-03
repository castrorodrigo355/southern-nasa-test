import { fireEvent, render, screen } from '@testing-library/react';
import { TextInput } from '../../components/TextInput';

describe('<TextInput />', () => {
  const mockFn = jest.fn();
  const inputText = 'inputText';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('1. Snapshot: ', () => {
    render(
      <TextInput label='...' placeholder='...' value='...' onChange={mockFn} />
    );
    expect(screen).toMatchSnapshot();
  });

  test('2. Should insert values and trigger onChange: ', () => {
    render(
      <TextInput label='...' placeholder='...' value='...' onChange={mockFn} />
    );
    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: inputText } });
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
