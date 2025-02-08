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
  const configIs = 'e49ecc9c-3dd9-447f-8a2f-f307e1c25e18';
  return <ClientComponent accessToken={accessToken} configId={configIs}/>;
}