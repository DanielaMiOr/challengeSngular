import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

describe('renders input value', () => {

  it('should render Email input element',  () => {
    render(<App />);
    const inputValue = screen.getByPlaceholderText(/Inserte el número n:/i)
    expect(inputValue).toBeInTheDocument();
  });

});

