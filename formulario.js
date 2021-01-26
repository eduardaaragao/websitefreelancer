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

    _this.state = { value: 'Selecione a categoria' };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Formulario, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      alert('Você acabou de solicitar o serviço: ' + this.state.value);
      event.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { onSubmit: this.handleSubmit, style: form },
        React.createElement(
          'div',
          null,
          React.createElement(
            'div',
            null,
            React.createElement(
              'label',
              { 'for': 'fname' },
              'Nome'
            )
          ),
          React.createElement(
            'div',
            null,
            React.createElement('input', { type: 'text', id: 'nome', name: 'pnome', placeholder: 'Seu nome' })
          ),
          React.createElement(
            'div',
            { 'class': 'row' },
            React.createElement(
              'div',
              { 'class': 'col-25' },
              React.createElement(
                'label',
                { 'for': 'categoria' },
                'Categoria'
              )
            ),
            React.createElement(
              'div',
              { 'class': 'col-75' },
              React.createElement(
                'select',
                { id: 'categoria', name: 'categoria' },
                React.createElement(
                  'option',
                  { value: 'designer' },
                  'Designer'
                ),
                React.createElement(
                  'option',
                  { value: 'ilustracao' },
                  'Ilustra\xE7\xE3o'
                ),
                React.createElement(
                  'option',
                  { value: 'fotografia' },
                  'Fotografia'
                ),
                React.createElement(
                  'option',
                  { value: 'programacao' },
                  'Programa\xE7\xE3o'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Formulario;
}(React.Component);

var domContainer = document.querySelector('#form');
ReactDOM.render(React.createElement(Formulario, null), domContainer);