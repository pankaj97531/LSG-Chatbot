import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./Chatbot/config";
import "./App.css";
import MessageParser from "./Chatbot/MessageParser";
import ActionProvider from "./Chatbot/ActionProvider";

function App() {
  return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        placeholderText="Please Pick an option"
      />
    </div>
  );
}

export default App;
