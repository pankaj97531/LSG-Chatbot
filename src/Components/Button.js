function Button({ handleClick, stockName, disable = false }) {
  return (
    <button
      className="stockNameBtn"
      onClick={() => handleClick(stockName)}
      disabled={disable}
    >
      {stockName}
    </button>
  );
}

export default Button;
