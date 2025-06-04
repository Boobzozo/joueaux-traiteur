import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Header from '../src/components/Header';

describe('Header', () => {
  it('renders navigation links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getAllByText('Accueil').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Nos Formules').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Galerie').length).toBeGreaterThan(0);
  });
});
