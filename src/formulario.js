'use strict';

const e = React.createElement;

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Selecione a categoria'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Você acabou de solicitar o serviço: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    const style = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    }
    return (
      <form onSubmit={this.handleSubmit} style={style}>
        <h2>Pedir Orçamento</h2>
        <div>
          <input class="inputbox" type="text" name="" required="required"/>
            <span>Nome Completo</span>
        </div>
        <div>
          <input class="inputbox" type="text" name="" required="required"/>
            <span>Descrição do serviço</span>
        </div>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="designer">Ilustração</option>
          <option value="designer">Designer</option>
          <option value="fotografia">Fotografia</option>
          <option value="programacao">Programação</option>
        </select>
        <span>Selecione a categoria do serviço</span>
        <div class="inputbox">
          <input type="submit" name="" value="Enviar"/>
        </div>
      </form>
    );
  }
}
const domContainer = document.querySelector('#form');
ReactDOM.render(<FlavorForm></FlavorForm>, domContainer);