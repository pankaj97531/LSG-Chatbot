import { useState } from "react";
import Button from "./Button";

function StockExchange(props) {
  const [isDisable, setIsDisable] = useState(false);
  const stockData = props.state.data;
  const { actions } = props.actions;

  function handleStock(stockName) {
    props.state.selectedData.stockExchangename = stockName;
    setIsDisable(true);
    actions.intialStockAction(stockName);
  }

  return (
    <div className="stcContainer">
      <div className="stcHeader">Please Select a Stock Exchage</div>
      {stockData?.map((data) => (
        <Button
          handleClick={handleStock}
          stockName={data.stockExchange}
          key={data.stockExchange}
          disable={isDisable}
        />
      ))}
    </div>
  );
}

export default StockExchange;
