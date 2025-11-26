// frontend/src/wp-components/main/Nav.jsx
"use client";
import { gql, useQuery } from "@apollo/client";
import client from "@/utils/apolloClient";

const GET_MENU = gql`
  query GetMenu {
    menu(id: "Main", idType: NAME) {
      name
      menuItems {
        nodes {
          label
          url
          path
        }
      }
    }
  }
`;

export default function Nav() {
    const { data, loading, error } = useQuery(GET_MENU, {
        client,
    });

    if (loading) return <p>Ładowanie menu...</p>;
    if (error) return <p>Błąd menu: {error.message}</p>;

    return (
        <nav>
            <ul>
                {data?.menu?.menuItems?.nodes?.map((item) => (
                    <li key={item.url}>
                        <a href={item.path}>{item.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
