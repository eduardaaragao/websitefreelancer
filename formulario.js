'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var FlavorForm = function (_React$Component) {
  _inherits(FlavorForm, _React$Component);

  function FlavorForm(props) {
    _classCallCheck(this, FlavorForm);

    var _this = _possibleConstructorReturn(this, (FlavorForm.__proto__ || Object.getPrototypeOf(FlavorForm)).call(this, props));

    _this.state = { value: 'Selecione a categoria' };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(FlavorForm, [{
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
      var style = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
      return React.createElement(
        'form',
        { onSubmit: this.handleSubmit, style: style },
        React.createElement(
          'h2',
          null,
          'Pedir Or\xE7amento'
        ),
        React.createElement(
          'div',
          null,
          React.createElement('input', { 'class': 'inputbox', type: 'text', name: '', required: 'required' }),
          React.createElement(
            'span',
            null,
            'Nome Completo'
          )
        ),
        React.createElement(
          'div',
          null,
          React.createElement('input', { 'class': 'inputbox', type: 'text', name: '', required: 'required' }),
          React.createElement(
            'span',
            null,
            'Descri\xE7\xE3o do servi\xE7o'
          )
        ),
        React.createElement(
          'select',
          { value: this.state.value, onChange: this.handleChange },
          React.createElement(
            'option',
            { value: 'designer' },
            'Ilustra\xE7\xE3o'
          ),
          React.createElement(
            'option',
            { value: 'designer' },
            'Designer'
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
        ),
        React.createElement(
          'span',
          null,
          'Selecione a categoria do servi\xE7o'
        ),
        React.createElement(
          'div',
          { 'class': 'inputbox' },
          React.createElement('input', { type: 'submit', name: '', value: 'Enviar' })
        )
      );
    }
  }]);

  return FlavorForm;
}(React.Component);

var domContainer = document.querySelector('#form');
ReactDOM.render(React.createElement(FlavorForm, null), domContainer);