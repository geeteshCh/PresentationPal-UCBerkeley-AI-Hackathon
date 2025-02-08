// ./components/Controls.tsx
"use client";
import { useVoice, VoiceReadyState } from "@humeai/voice-react";
import { FaMicrophone, FaHome  } from "react-icons/fa";
import Link from 'next/link';
import Messages from "./Messages";

export default function Controls() {
  const { connect, disconnect, readyState } = useVoice();
  const className = "px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
  /*
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
  } */

  return (
    <div className="flex min-h-screen">
    <div className="w-1/4 bg-gray-800 text-white p-6">
    
    <div className="mb-6">
      <Link href="/">
        <button className="font-bold flex items-center space-x-2">
          <FaHome className="text-xl" />
          <span>Go to Home Page</span>
        </button>
      </Link>
    </div>

    
      <div className="flex-grow p-6 bg-gray-100">
      <div className="flex justify-center items-center space-x-4">
        {readyState === VoiceReadyState.OPEN ? (
          <button
            className={className}
            onClick={() => {
              disconnect();
            }}
          >
            <FaMicrophone className="text-red-600" />
          </button>
        ) : (
          <button
            className={className}
            onClick={() => {
              connect()
                .then(() => {})
                .catch(() => {});
            }}
          >
            <FaMicrophone />
          </button>
        )}
      </div>
    </div>

    
    </div>
    <Messages />
  </div>
  );
}
