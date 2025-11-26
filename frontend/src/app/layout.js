// frontend/src/app/layout.js
"use client";
import { ApolloProvider } from "@apollo/client";
import client from "@/utils/apolloClient";
import { ThemeProvider } from "@/context/ThemeContext";
import Nav from "@/wp-components/main/Nav"
import './globals.css'

export default function RootLayout({ children }) {
    return (
        <html lang="pl">
        <body>
        <ApolloProvider client={client}>
            <ThemeProvider>
                <Nav />
                {children}
            </ThemeProvider>
        </ApolloProvider>
        </body>
        </html>
    );
}
