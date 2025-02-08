// ./components/Controls.tsx
"use client";
import { useVoice, VoiceReadyState } from "@humeai/voice-react";
import { useEffect, useState, useRef } from "react";
import { FaMicrophone, FaHome, FaStopCircle  } from "react-icons/fa";
import Link from 'next/link';
import Messages from "./Messages";
import { motion, AnimatePresence } from 'framer-motion';

export default function Controls() {
  const { connect, disconnect, readyState, lastUserMessage, 
    lastVoiceMessage, isPlaying } = useVoice();

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

      {/*
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
      {isPlaying && <p className="text-blue-500 mt-2">🗣️ AI is Talking...</p>}
    </div>
        */}

    <div>
      <div className="flex justify-center items-center space-x-4">
        <motion.button
          className="p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
          onClick={() => {
            if (readyState === VoiceReadyState.OPEN) {
              disconnect();
            } else {
              connect()
                .then(() => {})
                .catch(() => {});
            }
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {readyState === VoiceReadyState.OPEN ? (
              <motion.div
                key="stop"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
              >
                <FaStopCircle className="text-red-600 text-2xl" />
              </motion.div>
            ) : (
              <motion.div
                key="mic"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
              >
                <FaMicrophone className="text-blue-600 text-2xl" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {isPlaying && (
          <motion.p
            className="text-white-500 mt-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            🗣️ AI is Talking...
          </motion.p>
        )}
      </AnimatePresence>
    </div>
    
    </div>
    <Messages />
  </div>
  );
}
