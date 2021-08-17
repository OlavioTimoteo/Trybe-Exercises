// App.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Tela de inserção do Email', () => {
  it('Verificando se existe o campo Email.', () => {
    const { getByLabelText } = render(<App />);
    const inputEmail = getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  });

  it('Verificando se existe um botão', () => {
    const { getAllByRole } = render(<App />);
    const buttons = getAllByRole('button');
    expect(buttons.length).toBe(2);
  });

  it('Testa se existe um botão "Enviar"', () => {
    const { getByTestId } = render(<App />);
    const btnSend = getByTestId('id-send');
    expect(btnSend).toBeInTheDocument();
    expect(btnSend.type).toBe('button');
    expect(btnSend).toHaveValue('Enviar')
  });

  // it('Testa se existe um botão "Voltar"', () => {
  //   const { getByTestId } = render(<App />);
  //   const btnBack = getByTestId('id-back');
  //   expect(btnBack).toBeInTheDocument();
  //   expect(btnBack.type).toBe('button');
  //   expect(btnBack).toHaveValue('Voltar');
  // });

  test('Verificando se o botão e o campo email estão funcionando.', () => {
    const { getByTestId, getByLabelText } = render(<App />);
  
    const EMAIL_USER = 'email@email.com';
  
    const textEmail = getByTestId('id-email-user');
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:');
  
    const btnSend = getByTestId('id-send');
    const inputEmail = getByLabelText('Email');
    fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
    fireEvent.click(btnSend);
    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
  });
})
