import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Calculator from './pages/CalculatorPage';

describe('App interaction', () => {
  it('renders the home page', () => {
    render(<App />);
    expect(document.body.textContent).toMatch(/Welcome to our page!/i);
  });

  it('contains the correct link to calculator page', () => {
    render(<App />);
    const navLinkCalculator = document.querySelector('[href="/calculator"]');
    expect(navLinkCalculator.innerHTML).toMatch(/Calculator/i);
  });

  it('displays 1 on calculator display when key 1 is clicked', () => {
    render(<Calculator />);
    const key1 = screen.getByText('1');
    const display = document.querySelector('.calculator__display');
    expect(key1.innerHTML).toBe('1');
    fireEvent.click(key1);
    expect(display.innerHTML).toBe('1');
  });

  it('Simulate User interaction doing a sum of 8 + 9', () => {
    render(<Calculator />);
    const key8 = screen.getByText('8');
    const key9 = screen.getByText('9');
    const keyPlus = screen.getByText('+');
    const keyEqual = screen.getByText('=');
    const display = document.querySelector('.calculator__display');
    expect(key8.innerHTML).toBe('8');
    expect(key9.innerHTML).toBe('9');
    expect(keyPlus.innerHTML).toBe('+');
    fireEvent.click(key8);
    fireEvent.click(keyPlus);
    fireEvent.click(key9);
    fireEvent.click(keyEqual);
    expect(display.innerHTML).toBe('17');
  });
});
