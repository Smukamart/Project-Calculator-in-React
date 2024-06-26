import React, { Component } from "react";
import "./App.css";

const Painel = () => {
  return <div className="painel">0.75</div>;
};

const Botao = (props) => {
  return <div className={props.tipo}>{props.digito}</div>;
};

function App() {
  return (
    <div className="painel-botoes">
      <Painel />
      <Botao tipo="botao-ac" digito="AC" />
      <Botao tipo="botao-operacao" digito="/" />
      <Botao tipo="botao-numero" digito="7" />
      <Botao tipo="botao-numero" digito="8" />
      <Botao tipo="botao-numero" digito="9" />
      <Botao tipo="botao-operacao" digito="*" />
      <Botao tipo="botao-numero" digito="4" />
      <Botao tipo="botao-numero" digito="5" />
      <Botao tipo="botao-numero" digito="6" />
      <Botao tipo="botao-operacao" digito="-" />
      <Botao tipo="botao-numero" digito="1" />
      <Botao tipo="botao-numero" digito="2" />
      <Botao tipo="botao-numero" digito="3" />
      <Botao tipo="botao-operacao" digito="+" />
      <Botao tipo="botao-zero" digito="0" />
      <Botao tipo="botao-numero" digito="." />
      <Botao tipo="botao-operacao" digito="=" />
    </div>
  );
}

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "Primeira página com Class Component",
    };
    this.mudar = this.mudar.bind(this);
  }

  mudar() {
    var novoTitulo = "Aprendi a utilizar Class Component";
    this.setState({ titulo: novoTitulo });
  }

  render() {
    return (
      <div>
        <h1>{this.state.titulo}</h1>
        <button onClick={this.mudar}>Muda Título</button>
      </div>
    );
  }
}

class AddRemove extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: 0,
    };
    this.somar = this.somar.bind(this);
    this.subtrair = this.subtrair.bind(this);
  }

  somar() {
    let state = this.state;
    state.valor += 1;
    this.setState(state);
  }

  subtrair() {
    let state = this.state;
    state.valor -= 1;
    this.setState(state);
  }

  render() {
    return (
      <div>
        <div>Valor: {this.state.valor}</div>
        <button onClick={this.somar}>Adicionar 1</button>
        <button onClick={this.subtrair}>Subtrair 1</button>
      </div>
    );
  }
}

export default AddRemove;
