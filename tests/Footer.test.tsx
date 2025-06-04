import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Footer from '../src/components/Footer';

describe('Footer', () => {
  it('shows contact information', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    expect(screen.getByText(/contact@jouauxtraiteur.fr/)).toBeInTheDocument();
    expect(screen.getAllByText(/Jouaux Traiteur/).length).toBeGreaterThan(0);
  });
});
