import { useEffect } from "react";

export function useHidden() {
  useEffect(() => {
    document
      .querySelectorAll(".react-chatbot-kit-chat-bot-message")
      .forEach(function (div) {
        let eleSpan = div.querySelector("span");
        if (eleSpan && eleSpan.innerHTML.trim().length === 0) {
          div.style.display = "none";
        }
      });
  }, []);
}
