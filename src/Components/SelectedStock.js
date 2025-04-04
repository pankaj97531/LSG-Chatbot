import Button from "./Button";
import { useHidden } from "../hooks/useHidden";
import { useState } from "react";

function SelectedStock(props) {
  const [isDisable, setIsDisable] = useState(false);
  const { stockExchangename, stockName } = props.state.selectedData;
  const { data } = props.state;
  const { actions } = props.actions;
  let selectedData = {};
  const selectedStockObj = data.filter(
    (ele) => ele.stockExchange === stockExchangename
  )[0];

  useHidden();

  if (Object.keys(selectedStockObj).includes("topStocks")) {
    selectedData = selectedStockObj.topStocks.filter(
      (ele) => ele.stockName === stockName
    )[0];
  }
  function handleMainMenu() {
    setIsDisable(true);
    actions.restartBot();
  }
  function handleGoBack() {
    setIsDisable(true);
    actions.intialStockAction();
  }

  return (
    <div className="stcContainer">
      <div className="stcHeader final">
        Stock Price of {stockName} is {selectedData?.price}. Please Selectan
        option.
      </div>
      <Button
        handleClick={() => handleMainMenu()}
        stockName="Main Menu"
        disable={isDisable}
      />
      <Button
        handleClick={() => handleGoBack()}
        stockName="Go Back"
        disable={isDisable}
      />
    </div>
  );
}

export default SelectedStock;
