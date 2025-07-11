import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './index';

describe('SearchBar', () => {
  it('deve renderizar o campo de busca com placeholder padrão', () => {
    render(<SearchBar onSearch={() => {}} value="" />);
    const input = screen.getByPlaceholderText("Buscar...");

    expect(input).toBeInTheDocument();
  });

  it('deve renderizar o campo de busca com placeholder customizado', () => {
    render(<SearchBar onSearch={() => {}} value="" placeholder="Buscar livros..." />);
    const input = screen.getByPlaceholderText("Buscar livros...");

    expect(input).toBeInTheDocument();
  });

  it('deve chamar onSearch ao digitar', () => {

    jest.useFakeTimers();
    const onSearch = jest.fn();
    render(<SearchBar onSearch={onSearch} value="" />);
    const input = screen.getByPlaceholderText('Buscar...');

    fireEvent.change(input, { target: { value: 'Cristianismo' } });
    jest.advanceTimersByTime(300);

    expect(onSearch).toHaveBeenCalledWith('Cristianismo');
    jest.useRealTimers();
  });
});
