'use strict';

class Formulario extends React.Component {
  userData;

  constructor(props) {
      super(props);

      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangeCategoria = this.onChangeCategoria.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          name: '',
          email: '',
          categoria: '',
      }
  }

  // Form Events
  onChangeName(e) {
      this.setState({ name: e.target.value })
  }

  onChangeEmail(e) {
      this.setState({ email: e.target.value })
  }

  onChangeCategoria(e) {
    this.setState({ categoria: e.target.value })
  }

  onSubmit(e) {
      e.preventDefault()

      this.setState({
          name: '',
          email: '',
          categoria: '',
      })
  }

  componentDidMount() {
      this.userData = JSON.parse(localStorage.getItem('user'));

      if (localStorage.getItem('user')) {
          this.setState({
              name: this.userData.name,
              email: this.userData.email,
              categoria: this.userData.categoria,
          })
      } else {
          this.setState({
              name: '',
              email: '',
              categoria: '',
          })
      }
  }

  componentWillUpdate(nextProps, nextState) {
      localStorage.setItem('user', JSON.stringify(nextState));
  }

  render() {
      return (
     
        <form action="index.html" autocomplete="off">
        <h3 class="title">Mensagem</h3>
        <div class="input-container">
          <input required value ={this.state.name} onChange={this.onChangeName} placeholder="Digite seu nome" type="text" name="name" class="input" />
        </div>
        <div class="input-container">
          <input required value={this.state.email} onChange={this.onChangeEmail} placeholder="Digite seu email" type="email" name="email" class="input"/>
        </div>
        <div class="input-container">
          <select id="categoria" name="categoria" value={this.state.categoria} onChange={this.onChangeCategoria} >
            <option >Programação</option>
            <option>Fotografia</option>
            <option>Design</option>
            </select>
        </div>
        <div class="input-container textarea">
          <textarea placeholder="Descrição do projeto" name="message" class="input"></textarea>
        </div>
        <input type="submit" value="Enviar" class="btn" />
      </form>
      )
  }
}
const domContainer = document.querySelector('#form');
ReactDOM.render(<Formulario></Formulario>, domContainer);