// ./components/Messages.tsx
"use client";
import { useVoice } from "@humeai/voice-react";

export default function Messages() {
  const { messages } = useVoice();

  return (
    <div className="flex flex-col gap-2">
      {messages.map((msg, index) => {
        if (!msg || !msg.message || !msg.message.content) {
          return null;
        }
  
        const bubbleClasses = msg.type === "user_message"
          ? "bg-blue-500 text-white rounded-tl-md rounded-bl-md rounded-tr-lg p-4"
          : "bg-gray-200 text-black rounded-tr-md rounded-br-md rounded-tl-lg p-4";
  
          /*
        const containerClasses = msg.type === "user_message"
          ? "justify-end"
          : "justify-start";
        */

          const containerClasses = "justify-center"
  
        // Apply max width only for user messages
        const maxWidthClass = "max-w-md";
  
        return (
          <div key={msg.type + index} className={`flex ${containerClasses}`}>
            <div className={`${bubbleClasses} ${maxWidthClass}`}>
              <p>{msg.message.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
  
  
  
}
