'use strict';

class Formulario extends React.Component {
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
    return (
      <form onSubmit={this.handleSubmit} style={form}>
        <div>
          <div>
            <label for="fname">Nome</label>
          </div>
          <div>
            <input type="text" id="nome" name="pnome" placeholder="Seu nome"/>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="categoria">Categoria</label>
            </div>
            <div class="col-75">
              <select id="categoria" name="categoria">
                <option value="designer">Designer</option>
                <option value="ilustracao">Ilustração</option>
                <option value="fotografia">Fotografia</option>
                <option value="programacao">Programação</option>
              </select>
            </div>
        </div>
        </div>
      </form>
    );
  }
}

const domContainer = document.querySelector('#form');
ReactDOM.render(<Formulario></Formulario>, domContainer);