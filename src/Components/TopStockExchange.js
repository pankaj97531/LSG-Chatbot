import { useEffect, useState } from "react";
import Button from "./Button";
import { useHidden } from "../hooks/useHidden";

function TopStockExchange(props) {
  const [stockData, setStockData] = useState([]);
  const [isDisable, setIsDisable] = useState(false);
  const { stockExchangename } = props.state.selectedData;

  useHidden();

  const { actions } = props.actions;

  function handleStock(stockName) {
    props.state.selectedData.stockName = stockName;
    setIsDisable(true);
    actions.stockSelectionAction(stockName);
  }
  useEffect(() => {
    const stockData = props.state.data.filter(
      (ele) => ele.stockExchange === stockExchangename
    );
    if (stockData.length) {
      setStockData(stockData[0]);
    }
  }, [props, stockExchangename]);

  return (
    <div className="stcContainer">
      <div className="stcHeader">Please Select a Stock</div>
      {stockData?.topStocks?.map((data) => (
        <Button
          handleClick={handleStock}
          stockName={data.stockName}
          key={data.stockName}
          disable={isDisable}
        />
      ))}
    </div>
  );
}

export default TopStockExchange;
