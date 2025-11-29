// frontend/src/wp-components/main/Nav.jsx
"use client";

import React, { useContext, useEffect, useRef } from "react";
import { gql, useQuery } from "@apollo/client";
import { usePathname, useRouter } from "next/navigation";
import { createApolloClient } from "@/utils/apolloClient";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import { isPLPath } from "@/utils/isPlPath";
import { Hamburger } from "@/components/Hamburger";
import { useSwipe } from "@/hooks/useSwipe";

export default function Nav() {
    const { activeScrollDown, mobileMenuActive, setMobileMenuActive } = useContext(ThemeContext);
    const router = useRouter();
    const pathname = usePathname() || "/";
    const isPL = isPLPath(pathname);
    const refNav = useRef(null);
    const refHamburger = useRef(null);
    const refMobileNav = useRef(null);

    const client = createApolloClient(
        isPL
            ? "http://o-headless-backend-next.local/pl/graphql"
            : "http://o-headless-backend-next.local/graphql"
    );

    const checkSwipe = useSwipe(refMobileNav, "left-right");

    useEffect(() => {
        if (checkSwipe) setMobileMenuActive(false);
    }, [checkSwipe]);

    useEffect(() => {
        const closeNav = (e) => {
            const closeMobileNav =
                !(
                    (refNav.current === e.target || refNav.current.contains(e.target)) ||
                    (refHamburger.current === e.target || refHamburger.current.contains(e.target))
                );
            if (closeMobileNav) setMobileMenuActive(false);
        };

        document.body.addEventListener("click", closeNav);
        return () => {
            document.body.removeEventListener("click", closeNav);
        };
    }, []);

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

    if (loading) return <p>Loading menu...</p>;
    if (error) return <p>Error menu: {error.message}</p>;

    return (
        <>
            <header
                className={`flex flex-col fixed top-0 left-0 right-0 z-9 transition-transform duration-300
            before:content-['']
            before:block
            before:absolute
            before:left-0
            before:right-0
            before:bottom-0
            before:h-16
            before:backdrop-blur-[5px]
            before:-z-10 ${activeScrollDown ? "-translate-y-10" : ""}`}
            >
                <div className="bg-black flex text-white h-10 px-4">
                    <div className="w-full xl:w-none xl:container m-auto flex">
                        <nav className="ml-auto">
                            <ul className="flex gap-3">
                                <li>
                                    <Link className={!isPL ? 'underline' : ''} href="/" scroll={true}>
                                        EN
                                    </Link>
                                </li>
                                <li>
                                    <Link className={isPL ? 'underline' : ''} href="/pl" scroll={true}>
                                        PL
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div
                    ref={refNav}
                    className={`flex text-white min-h-16 px-4 border-b border-black/40 shadow-[0_1px_3px_rgba(0,0,0,.4)] transition-colors duration-300 ${
                        mobileMenuActive ? "bg-primary-700 xl:bg-black/40" : "bg-black/40"
                    }`}
                >
                    <div className="w-full xl:w-none xl:container m-auto flex">
                        <Link
                            href={isPL ? "/pl" : "/"}
                            scroll={true}
                            className="flex items-center"
                        >
                            <img
                                width="28"
                                height="28"
                                src="http://o-headless-backend-next.local/pl/wp-content/uploads/sites/3/2025/03/l4.svg"
                                alt="Logo semDesign"
                            />
                            <span className="text-2xl -ml-2 font-semibold [&::first-letter]:text-transparent">semDesign</span>
                        </Link>

                        <Hamburger ref={refHamburger}/>

                        <nav
                            ref={refMobileNav}
                            className={`transition-transform duration-300 w-64 overflow-y-auto h-screen pb-26 bg-secondary-1100 absolute top-26 right-0 xl:w-auto xl:overflow-visible xl:pb-0 xl:h-auto xl:bg-transparent xl:ml-auto xl:my-auto xl:static xl:top-0 shadow-[0_0_3px_rgba(0,0,0,0.8)] xl:shadow-none ${
                                mobileMenuActive ? "translate-x-0" : "translate-x-full xl:translate-x-0 shadow-none"
                            }`}
                        >
                            <ul className="py-2 border-y border-white/20 flex flex-col xl:border-0 xl:py-0 xl:flex-row xl:gap-4 text-lg font-semibold">
                                {data?.menu?.menuItems?.nodes?.map((item) => {
                                    let href = item.path;
                                    if (isPL && !href.startsWith("/pl")) {
                                        href = `/pl${href.startsWith("/") ? href : "/" + href}`;
                                    }
                                    href = href.replace(/\/+/g, "/");
                                    const [basePath, hash] = href.split("#");
                                    let linkHref;
                                    if (hash) {
                                        const rootPath = isPL ? "/pl" : "/";
                                        linkHref = { pathname: rootPath, hash };
                                    } else {
                                        linkHref = basePath.replace(/\/+$/, "");
                                    }

                                    const normalizedItemPath = item.path.replace(/\/+$/, "") || "/";
                                    const normalizedPathname = (pathname.replace(/\/+$/, "") + (isPL ? "/" : "")) || "/";
                                    const withoutHash = normalizedItemPath.split("#");

                                    console.log('normalizedPathname xx:', normalizedPathname);
                                    console.log('withoutHash[0] xx:',withoutHash[0]);

                                    const isActive =
                                        normalizedPathname === withoutHash[0] ||
                                        normalizedPathname.startsWith(withoutHash[0] + "/");

                                    return (
                                        <li key={href}>
                                            <Link
                                                className={`w-full block xl:w-auto text-center px-4 py-2 xl:px-0 xl:py-1 hover:bg-black/25 xl:hover:bg-transparent ${isActive ? 'text-amber-500' : ''}`}
                                                href={linkHref}
                                                scroll={false}
                                                onClick={() => setMobileMenuActive(false)}
                                                // Prefetch only for hash-links
                                                onMouseEnter={() => {
                                                    if (hash) {
                                                        if (typeof linkHref === "string") {
                                                            router.prefetch(linkHref);
                                                        } else if (typeof linkHref === "object" && linkHref.pathname) {
                                                            router.prefetch(linkHref.pathname);
                                                        }
                                                    }
                                                }}
                                            >
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
        </>
    );
}
