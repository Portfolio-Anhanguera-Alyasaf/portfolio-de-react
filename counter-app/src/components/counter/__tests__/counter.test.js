import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../Counter';

test('Render do componente Counter', () => {
    render(<Counter />);
    const headingElement = screen.getByText(/Contador/i);
    const countDisplay = screen.getByText('0');
    expect(headingElement).toBeInTheDocument();
    expect(countDisplay).toBeInTheDocument();
});

test('Simulação de incremento pelo botão utilizando o evento de click', () => {
    render(<Counter />);
    const handleIncrementButton = screen.getByText('+');
    fireEvent.click(handleIncrementButton);
    const countDisplay = screen.getByText('1');
    expect(countDisplay).toBeInTheDocument();
});

test('Simulaçãom de decremento pelo botão utilizando o evento de click', () => {
    render(<Counter />);
    const handleDecrementButton = screen.getByText('-');
    fireEvent.click(handleDecrementButton);
    const countDisplay = screen.getByText('-1');
    expect(countDisplay).toBeInTheDocument();
});
