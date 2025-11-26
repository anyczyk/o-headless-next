"use client";
import { gql, useQuery } from "@apollo/client";
import client from "@/utils/apolloClient";

const GET_MENU = gql`
  query GetMenu($id: ID!) {
    menu(id: $id, idType: DATABASE_ID) {
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
        variables: { id: "21" }, // ✅ TWOJE ID MENU
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
