// frontend/src/wp-components/main/Nav.jsx
"use client";

import React, {useContext} from "react";
import { gql, useQuery } from "@apollo/client";
import { usePathname, useRouter } from "next/navigation";
import { createApolloClient } from "@/utils/apolloClient";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import {isPLPath} from "@/utils/isPlPath";

export default function Nav() {
    const { activeScrollDown } = useContext(ThemeContext);
    const router = useRouter();
    const pathname = usePathname() || "/";
    const isPL = isPLPath(pathname);

    const client = createApolloClient(
        isPL
            ? "http://o-headless-backend-next.local/pl/graphql"
            : "http://o-headless-backend-next.local/graphql"
    );

    const GET_MENU = gql`
    query GetMenu($menuId: ID!) {
      menu(id: $menuId, idType: NAME) {
        menuItems {
          nodes {
            label
            path
          }
        }
      }
    }
  `;

    const menuId = "Main";

    const { data, loading, error } = useQuery(GET_MENU, {
        variables: { menuId },
        client,
    });

    if (loading) return <p>Ładowanie menu...</p>;
    if (error) return <p>Błąd menu: {error.message}</p>;

    return (
        <header className={`flex flex-col fixed top-0 left-0 right-0 z-9 transition-transform duration-300 ${activeScrollDown ? '-translate-y-8' : ''}`}>
            <div className="bg-black text-white">
                <div className="container mx-auto flex">
                    <nav className="ml-auto">
                        <ul className="flex gap-3">
                            <li>
                                <Link href="/" scroll={true} onMouseEnter={() => router.prefetch("/")}>
                                    EN
                                </Link>
                            </li>
                            <li>
                                <Link href="/pl" scroll={true} onMouseEnter={() => router.prefetch("/pl")}>
                                    PL
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="bg-gray-500 text-white">
                <div className="container mx-auto flex">
                    <Link href={isPL ? "/pl" : "/"} scroll={true} className="flex gap-3" onMouseEnter={() => router.prefetch(isPL ? "/pl" : "/")}>
                        <img
                            width="28"
                            height="28"
                            src="http://o-headless-backend-next.local/pl/wp-content/uploads/sites/3/2025/03/l4.svg"
                            alt="Logo semDesign"
                        />
                        <span>semDesign</span>
                    </Link>
                    <nav className="ml-auto">
                        <ul className="flex gap-3">
                            {data?.menu?.menuItems?.nodes?.map((item) => {
                                let href = item.path;
                                if (isPL && !href.startsWith("/pl")) {
                                    href = `/pl${href.startsWith("/") ? href : "/" + href}`;
                                }
                                href = href.replace(/\/+/g, "/");
                                const [basePath, hash] = href.split("#");
                                let linkHref;
                                if (hash) {
                                    // dla PL → "/pl", dla default → "/"
                                    const rootPath = isPL ? "/pl" : "/";
                                    linkHref = {pathname: rootPath, hash};
                                } else {
                                    // normalne linki
                                    linkHref = basePath.replace(/\/+$/, "");
                                }
                                return (
                                    <li key={href}>
                                        <Link href={linkHref} scroll={false}>
                                            {item.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
