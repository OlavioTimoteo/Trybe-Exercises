import React from 'react';
import { getByLabelText, render, screen } from '@testing-library/react';
import App from './App';

describe('Tela de inserção do email', () => {
it('Verifica se existe um campo de Email', () => {
    const { getByLabelText } = render(<App />);
    const inputEmail = getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  });


  it('Verifica se existem dois botões', () => {
    const { getAllByRole } = render(<App />);
    const buttons = getAllByRole('button')
    expect(buttons.length).toBe(2);
  })

  it('Verifica se existe um botão "Enviar"', () => {
    const { getByTestId } = render(<App />);
    const btn = getByTestId('id-send');
    expect(btn).toBeInTheDocument();
    expect(btn.type).toBe('button');
    expect(btn).toHaveValue('Enviar');
  });

  it('Verifica se existe um botão "Voltar"', () => {
    const { getByTestId } = render(<App />);
    const btn = getByTestId('id-back');
    expect(btn).toBeInTheDocument();
    expect(btn.type).toBe('button');
    expect(btn).toHaveValue('Voltar');
  });
})