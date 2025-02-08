"use client";
import { VoiceProvider } from "@humeai/voice-react";
import Messages from "./Controls";
import Controls from "./Messages";
import Link from 'next/link';
import { Mic } from 'lucide-react'; // Using Lucide React icons for the microphone

export default function ClientComponent({
  accessToken,
  configId
}: {
  accessToken: string;
  configId: string;
}) {
  const buttonClassName = "px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75";

  return (
    <div className="bg-orange-500 min-h-screen">
      <div className="bg-orange-500 flex justify-between items-center p-4">
        <Link href="/">
          <button className={buttonClassName}>Home</button>
        </Link>
        <div className="flex-grow flex justify-center">
          <div className="animate-pulse">
            <Mic className="w-8 h-8 text-white" /> {/* Microphone icon with pulse animation */}
          </div>
        </div>
      </div>
      <VoiceProvider
        configId={configId}
        auth={{ type: "accessToken", value: accessToken }}
      >
        <Messages />
        <Controls />
      </VoiceProvider>
    </div>
  );
}