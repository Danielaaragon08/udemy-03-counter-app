import React, { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ valorInicialContador }) => {
  const [contador, setContador] = useState(valorInicialContador); // useState es un hook

  const handleIncremntClick = () => {
    setContador(contador + 1);
  };

  const handleDecrement = () => {

    if (contador === 0) return;

    setContador(contador - 1);
    
  };

  const handleReset = () => {
    setContador(valorInicialContador);
  };

  return (
    <>
      <div className="container mt-4">
        <h1>Counter App</h1>
        <hr />
        <h2>
          Contador: <strong>{contador}</strong>
        </h2>
        <button className="btn btn-primary" onClick={handleDecrement}>
          -
        </button>
        <button className="btn btn-primary m-3" onClick={handleReset}>
          Reset
        </button>
        <button className="btn btn-primary" onClick={handleIncremntClick}>
          +
        </button>
      </div>
    </>
  );
};

CounterApp.propTypes = {
  valorInicialContador: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  valorInicialContador: 10,
};