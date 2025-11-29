// frontend/src/app/layout.js
"use client";
import React, {useRef} from "react";
import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "@/utils/apolloClient";
import { ThemeProvider } from "@/context/ThemeContext";
import Nav from "@/wp-components/main/Nav";
import "./globals.scss";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
    const pathname = usePathname() || "/";
    const isPL = pathname.startsWith("/pl");

    const endpoint = isPL
        ? "http://o-headless-backend-next.local/pl/graphql"
        : "http://o-headless-backend-next.local/graphql";

    const client = createApolloClient(endpoint);

    return (
        <html lang="pl">
        <body className="pt-26 min-h-screen bg-[linear-gradient(to_bottom,var(--color-primary-700)_0px,var(--color-primary-700)_104px,transparent_104px)]">
            <ApolloProvider client={client}>
                <ThemeProvider>
                    <Nav/>

                        {children}

                </ThemeProvider>
            </ApolloProvider>
        </body>
        </html>
);
}
