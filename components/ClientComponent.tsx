"use client";
import { VoiceProvider } from "@humeai/voice-react";
import Messages from "./Controls";
import Controls from "./Messages";
import Link from 'next/link';

export default function ClientComponent({
  
  accessToken,
  configId
}: {
  accessToken: string;
  configId: string;
}) {
  const className = "px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
  return (
    <div className="bg-orange-500 min-h-screen">
      <div className="bg-orange-500 flex justify-end">
      <Link href="/">
          <button className={`${className} mt-4 mr-4`}>Home</button>
        </Link>
      </div>
    <VoiceProvider
      configId={configId}
      auth={{ type: "accessToken", value: accessToken }}
    >
      <Messages />
      <Controls/>
      
    </VoiceProvider>
     
    </div>
  );
}
