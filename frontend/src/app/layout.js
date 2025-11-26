// frontend/src/app/layout.js
"use client";

import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "@/utils/apolloClient";
import { ThemeProvider } from "@/context/ThemeContext";
import Nav from "@/wp-components/main/Nav";
import "./globals.css";
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
        <body>
            <ApolloProvider client={client}>
                <ThemeProvider>
                    <Nav />
                    <div className="container mx-auto">
                        {children}
                    </div>
                </ThemeProvider>
            </ApolloProvider>
        </body>
        </html>
    );
}


// "use client";
// import { ApolloProvider } from "@apollo/client";
// import client from "@/utils/apolloClient";
// import { ThemeProvider } from "@/context/ThemeContext";
// import Nav from "@/wp-components/main/Nav"
// import './globals.css'
//
// export default function RootLayout({ children }) {
//     return (
//         <html lang="pl">
//         <body>
//         <ApolloProvider client={client}>
//             <ThemeProvider>
//                 <Nav />
//                 {children}
//             </ThemeProvider>
//         </ApolloProvider>
//         </body>
//         </html>
//     );
// }
