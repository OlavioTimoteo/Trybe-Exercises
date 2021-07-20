import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['Acordar', 'Tomar café da manhã', 'Escovar os Dentes', 'Ir estudar'];

class App extends React.Component {
  render() {
    return (
      <ul>{ tarefas.map(tarefas => Task(tarefas)) }</ul>
    )
  }
}

export default App;
