import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HomeModule } from '../index';

describe('HomeModule', () => {
  it('deve renderizar o título do catálogo', () => {
    render(<HomeModule />);
    expect(screen.getByText('Catálogo de Livros')).toBeInTheDocument();
  });
});
