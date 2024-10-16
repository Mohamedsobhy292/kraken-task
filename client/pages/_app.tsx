import type { AppProps } from "next/app";
import "../styles/globals.css";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    gql,
} from "@apollo/client";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { CartContextProvider } from "../context/cart-context";

const client = new ApolloClient({
    uri: "http://localhost:3001",
    cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <CartContextProvider>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </CartContextProvider>
        </ApolloProvider>
    );
}

export default MyApp;
