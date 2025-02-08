// ./components/Controls.tsx
"use client";
import { useVoice, VoiceReadyState } from "@humeai/voice-react";
import { FaMicrophone } from "react-icons/fa";
export default function Controls() {
  const { connect, disconnect, readyState } = useVoice();
  const className = "px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"

  if (readyState === VoiceReadyState.OPEN) {
    return (
      <button
      className={className}
        onClick={() => {
          disconnect();
        }}
      >
       <FaMicrophone className="text-red-600"></FaMicrophone>
      </button>
    );
  }

  return (
    <button
    className={className}
      onClick={() => {
        connect()
          .then(() => {
            /* handle success */
          })
          .catch(() => {
            /* handle error */
          });
      }}
    >
      <FaMicrophone></FaMicrophone>
    </button>
  );
}
