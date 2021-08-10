import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      estadoFavorito: '',
      email: '',
      nome: '',
      idade: '0',
      vaiComparecer: false,
      palavraChaveFavorita: '',
    }
  }

  handleChange({ target }) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({ 
      [name]: value 
    })
  }

  render() {
    return (
      <div>
        <h1>Estados e React: ferramenta incrível ou reagindo a regionalismos?</h1>
        <form className="form">
          <label>
            Qual seu estado favorito?
            <textarea 
            name="estadoFavorito" 
            value={this.state.estadoFavorito} 
            onChange={this.handleChange} />
          </label>

          <label>
            E-mail:
            <input 
            name="email" 
            value={this.state.email}
            type="email" 
            onChange={this.handleChange}
            />
          </label>

          <label>
            Nome:
            <input 
            name="nome" 
            value={this.state.nome}
            type="text" 
            onChange={this.handleChange}
            />
          </label>
        </form>

        <label>
          <input 
          name="idade" 
          value={this.state.idade}
          type="number" 
          onChange={this.handleChange}
          />
        </label>

        <label>
          Vai comparecer à conferência?
          <input 
          name="vaiComparecer" 
          value={this.state.vaiComparecer}
          type="checkbox" 
          onChange={this.handleChange}
          />
        </label>

        <label>
          Escolha sua palavra chave favorita:
          <select name="palavraChaveFavorita"
          value={this.state.palavraChaveFavorita}
          onChange={this.handleChange}>
          <option value="estado">Estado</option>
          <option value="evento">Evento</option>
          <option value="props">Props</option>
          <option value="hooks">Hooks</option>
          </select>
        </label>
      </div>
    )
  }
}

export default Form;