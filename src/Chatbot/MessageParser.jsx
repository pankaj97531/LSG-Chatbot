import React, { useEffect } from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    console.log(message);
  };
  const { checker } = children.props.state;

  useEffect(() => {
    if (checker === "stockName") {
      actions.topStockAction();
    }
    if (checker === "selectedStockName") {
      actions.finalAction();
    }
  }, [checker, actions]);

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: { actions },
        });
      })}
    </div>
  );
};

export default MessageParser;
