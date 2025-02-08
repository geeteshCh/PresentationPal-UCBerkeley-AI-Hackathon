import ClientComponent from "@/components/ClientComponent";
import { fetchAccessToken } from "@humeai/voice";

export default async function Page() {
  const accessToken = await fetchAccessToken({
    apiKey: "pJz156P7iHraAddWRGGliPvIG0DbVVybfP4zd2I3GcCtROIG",
    secretKey: "ZmP3wb2swBluvzj96w5WqxLnEzQpAIuLBfWolecrEX34FguX4gOwGvvLESQNgA0E",
  });
  if (!accessToken) {
    throw new Error();
  }
  const configIs = 'd686e1f8-49bd-4181-8e2e-a19585fc821d';
  return <ClientComponent accessToken={accessToken} configId={configIs}/>;
}
