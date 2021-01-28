'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Formulario = function (_React$Component) {
  _inherits(Formulario, _React$Component);

  function Formulario(props) {
    _classCallCheck(this, Formulario);

    var _this = _possibleConstructorReturn(this, (Formulario.__proto__ || Object.getPrototypeOf(Formulario)).call(this, props));

    _this.onChangeName = _this.onChangeName.bind(_this);
    _this.onChangeEmail = _this.onChangeEmail.bind(_this);
    _this.onChangeCategoria = _this.onChangeCategoria.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);

    _this.state = {
      name: '',
      email: '',
      categoria: ''
    };
    return _this;
  }

  // Form Events


  _createClass(Formulario, [{
    key: 'onChangeName',
    value: function onChangeName(e) {
      this.setState({ name: e.target.value });
    }
  }, {
    key: 'onChangeEmail',
    value: function onChangeEmail(e) {
      this.setState({ email: e.target.value });
    }
  }, {
    key: 'onChangeCategoria',
    value: function onChangeCategoria(e) {
      this.setState({ categoria: e.target.value });
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit(e) {
      e.preventDefault();

      this.setState({
        name: '',
        email: '',
        categoria: ''
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.userData = JSON.parse(localStorage.getItem('user'));

      if (localStorage.getItem('user')) {
        this.setState({
          name: this.userData.name,
          email: this.userData.email,
          categoria: this.userData.categoria
        });
      } else {
        this.setState({
          name: '',
          email: '',
          categoria: ''
        });
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      localStorage.setItem('user', JSON.stringify(nextState));
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { action: 'index.html', autocomplete: 'off' },
        React.createElement(
          'h3',
          { 'class': 'title' },
          'Mensagem'
        ),
        React.createElement(
          'div',
          { 'class': 'input-container' },
          React.createElement('input', { required: true, value: this.state.name, onChange: this.onChangeName, placeholder: 'Digite seu nome', type: 'text', name: 'name', 'class': 'input' })
        ),
        React.createElement(
          'div',
          { 'class': 'input-container' },
          React.createElement('input', { required: true, value: this.state.email, onChange: this.onChangeEmail, placeholder: 'Digite seu email', type: 'email', name: 'email', 'class': 'input' })
        ),
        React.createElement(
          'div',
          { 'class': 'input-container' },
          React.createElement(
            'select',
            { id: 'categoria', name: 'categoria', value: this.state.categoria, onChange: this.onChangeCategoria },
            React.createElement(
              'option',
              null,
              'Programa\xE7\xE3o'
            ),
            React.createElement(
              'option',
              null,
              'Fotografia'
            ),
            React.createElement(
              'option',
              null,
              'Design'
            )
          )
        ),
        React.createElement(
          'div',
          { 'class': 'input-container textarea' },
          React.createElement('textarea', { placeholder: 'Descri\xE7\xE3o do projeto', name: 'message', 'class': 'input' })
        ),
        React.createElement('input', { type: 'submit', value: 'Enviar', 'class': 'btn' })
      );
    }
  }]);

  return Formulario;
}(React.Component);

var domContainer = document.querySelector('#form');
ReactDOM.render(React.createElement(Formulario, null), domContainer);