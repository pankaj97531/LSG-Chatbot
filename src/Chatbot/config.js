import { createChatBotMessage } from "react-chatbot-kit";
import Header from "../Components/Header";
import Avatar from "../Components/Avatar";
import StockExchange from "../Components/StockExchange";
import data from "../stock_data.json";
import TopStockExchange from "../Components/TopStockExchange";
import SelectedStock from "../Components/SelectedStock";

const config = {
  initialMessages: [
    createChatBotMessage(`Hello! Welcome to LSEG. I'm here to help you.`, {
      widget: "startStock",
    }),
  ],
  botName: "LSEG Chatbot",
  customComponents: {
    header: (props) => <Header {...props} />,
    botAvatar: (props) => <Avatar {...props} />,
  },
  state: {
    data: data,
    selectedData: {
      stockExchangename: "",
      stockName: "",
    },
  },
  widgets: [
    {
      widgetName: "startStock",
      widgetFunc: (props) => <StockExchange {...props} />,
    },
    {
      widgetName: "startTopStock",
      widgetFunc: (props) => <TopStockExchange {...props} />,
    },
    {
      widgetName: "finalSelectedStock",
      widgetFunc: (props) => <SelectedStock {...props} />,
    },
  ],
};

export default config;
