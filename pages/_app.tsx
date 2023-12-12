import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { Sepolia,Mumbai } from "@thirdweb-dev/chains";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";
const clientId = "a25f9ca744bad8b13164375f53d372ab";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
    
    activeChain={Mumbai}
    clientId={clientId}
    // authConfig={{
    //   // Set this to your domain to prevent phishing attacks
    //   domain: "http://localhost:3000",
    //   // The URL of your Auth API
    //   authUrl: "/api/auth",
    // }}
     
    >
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
