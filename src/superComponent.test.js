import { render, screen, fireEvent } from '@testing-library/react';
import SuperComponent from './superComponent';

it('renders learn react link', () => {
  render(<SuperComponent />);
  const linkElement = screen.getByText(/Mon super Header/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders learn react link', () => {
    const messageATester = "Salut c est Audrey"
    render(<SuperComponent>{messageATester}</SuperComponent>);
    expect(screen.queryByText(messageATester)).toBeNull();
    fireEvent.click( screen.getByText(/super/i))
    expect(screen.getByText(messageATester)).toBeInTheDocument();
});
