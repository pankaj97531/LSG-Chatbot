import React from "react";
import { createClientMessage } from "react-chatbot-kit";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const updateState = (message, checker) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      checker,
    }));
  };
  const intialStockAction = (stockExchangename) => {
    const message = createClientMessage(stockExchangename);
    updateState(message, "stockName");
  };
  const topStockAction = () => {
    const message = createChatBotMessage("", { widget: "startTopStock" });
    updateState(message, "topStockName");
  };
  const stockSelectionAction = (stockName) => {
    const message = createClientMessage(stockName);
    updateState(message, "selectedStockName");
  };
  const finalAction = () => {
    const message = createChatBotMessage("", { widget: "finalSelectedStock" });
    updateState(message, "complete");
  };
  const restartBot = () => {
    const message = createChatBotMessage(
      "Hello! Welcome to LSEG. I'm here to help you.",
      { widget: "startStock" }
    );
    updateState(message, "complete");
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            intialStockAction,
            topStockAction,
            stockSelectionAction,
            finalAction,
            restartBot,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
