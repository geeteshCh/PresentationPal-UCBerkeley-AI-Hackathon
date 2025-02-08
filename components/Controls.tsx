"use client";
import { useVoice, VoiceReadyState } from "@humeai/voice-react";
import { useState, useEffect } from "react";
import { FaMicrophone } from "react-icons/fa";

export default function MicrophoneButton() {
  const { connect, disconnect, readyState, isListening } = useVoice();
  const [micAnimation, setMicAnimation] = useState("");

  useEffect(() => {
    if (isListening) {
      setMicAnimation("animate-pulse");
    } else {
      setMicAnimation("");
    }
  }, [isListening]);

  return (
    <div className="flex justify-center items-center py-4 shadow-md">
      <button
        className={`w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl cursor-pointer shadow-lg transition-transform duration-200 ${micAnimation}`}
        onClick={() => {
          if (readyState === VoiceReadyState.OPEN) {
            disconnect();
          } else {
            connect().catch(() => {});
          }
        }}
      >
        <FaMicrophone className={readyState === VoiceReadyState.OPEN ? "text-red-600" : "text-white"} />
      </button>
    </div>
  );
}
