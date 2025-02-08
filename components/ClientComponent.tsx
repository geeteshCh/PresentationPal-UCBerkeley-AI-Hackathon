"use client";
import { VoiceProvider } from "@humeai/voice-react";
import Controls from "./Controls";

export default function ClientComponent({
  
  accessToken,
  configId
}: {
  accessToken: string;
  configId: string;
}) {
  return (
    <div>
    <VoiceProvider
      configId={configId}
      auth={{ type: "accessToken", value: accessToken }}
    >
      <Controls/>
      <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <h4>
          Powered by Hume AI
        </h4>
      </div>
    </footer>
    </VoiceProvider>
    </div>
  );
}
