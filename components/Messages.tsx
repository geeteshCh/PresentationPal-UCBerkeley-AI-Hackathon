"use client";
import { useVoice } from "@humeai/voice-react";
import { useState, useEffect } from "react";

export default function Messages() {
  const { messages, isListening } = useVoice();

  return (
    <div className="p-6 bg-white min-h-screen flex flex-col">
      <div className="flex flex-col gap-4 mt-4">
        {messages.map((msg, index) => {
          if (!msg || !msg.message || !msg.message.content) {
            return null;
          }

          const isUser = msg.type === "user_message";
          const bubbleClasses = isUser
            ? "bg-blue-100 text-gray-800 rounded-lg p-4 shadow"
            : "bg-gray-100 text-gray-800 rounded-lg p-4 shadow";

          const containerClasses = isUser ? "justify-end" : "justify-start";

          return (
            <div key={msg.type + index} className={`flex ${containerClasses} mb-2`}>
              <div className="flex items-center gap-4 max-w-md">
                {!isUser && (
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold">🤖</span>
                  </div>
                )}
                <div className={`${bubbleClasses} mt-2`}>{msg.message.content}</div>
                {isUser && (
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold">👤</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
