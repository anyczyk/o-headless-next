// frontend/src/app/[...slug]/page.js
"use server";

import { gql } from "@apollo/client";
import { createApolloClient } from "@/utils/apolloClient";
import SemdesignM001SliderV1 from "@/wp-components/blocks/SemdesignM001SliderV1";

export default async function Page({ params }) {
    const resolvedParams = typeof params?.then === "function" ? await params : params;
    const slugArray = resolvedParams?.slug || [];

    const isPL = slugArray[0] === "pl";

    // endpoint dla odpowiedniego site
    const client = createApolloClient(
        isPL
            ? "http://o-headless-backend-next.local/pl/graphql"
            : "http://o-headless-backend-next.local/graphql"
    );

    // usuń /pl z slug jeśli subsite
    const pageSlugArray = isPL ? slugArray.slice(1) : slugArray;
    let slugPath = "/" + pageSlugArray.join("/");
    if (slugPath === "/") slugPath = "/"; // strona główna każdego site

    const GET_PAGE = gql`
    query GetPage($slug: ID!) {
      page(id: $slug, idType: URI) {
        title
        editorBlocks(flat: true) {
          __typename
          ... on SemdesignM001SliderV1 {
            attributes {
              slides
              effectFade
              arrows
              dots
              autoHeight
              tagName
            }
          }
          ... on CoreParagraph { attributes { content } }
          ... on CoreHeading { attributes { content level } }
        }
      }
    }
  `;

    try {
        const { data } = await client.query({
            query: GET_PAGE,
            variables: { slug: slugPath },
        });

        if (!data?.page) return <p>Strona nie znaleziona</p>;

        const blocks = data.page.editorBlocks || [];

        return (
            <div>
                <h1>{data.page.title}</h1>
                {blocks.map((block, idx) => {
                    switch (block.__typename) {
                        case "SemdesignM001SliderV1":
                            return <SemdesignM001SliderV1 key={idx} blockData={block} />;
                        case "CoreParagraph":
                            return <div key={idx} dangerouslySetInnerHTML={{ __html: block.attributes.content }} />;
                        case "CoreHeading": {
                            const Tag = `h${block.attributes.level || 2}`;
                            return <Tag key={idx} dangerouslySetInnerHTML={{ __html: block.attributes.content }} />;
                        }
                        default:
                            return null;
                    }
                })}
            </div>
        );
    } catch (err) {
        console.error("GraphQL fetch error:", err);
        return <p>Wystąpił błąd podczas ładowania strony.</p>;
    }
}



// "use server";
//
// import { gql } from "@apollo/client";
// import client from "@/utils/apolloClient";
// import SemdesignM001SliderV1 from "@/wp-components/blocks/SemdesignM001SliderV1";
//
// export default async function Page({ params }) {
//     const resolvedParams = typeof params.then === "function" ? await params : params;
//
//     const slugArray = resolvedParams?.slug || [];
//     const slugPath = slugArray.join("/"); // "" jeśli to home page
//
//     const GET_PAGE = gql`
//     query GetPage($slug: ID!) {
//       page(id: $slug, idType: URI) {
//         title
//         editorBlocks(flat: true) {
//           __typename
//           ... on SemdesignM001SliderV1 {
//             attributes {
//               slides
//               effectFade
//               arrows
//               dots
//               autoHeight
//               tagName
//             }
//           }
//           ... on CoreParagraph { attributes { content } }
//           ... on CoreHeading { attributes { content level } }
//         }
//       }
//     }
//   `;
//
//     try {
//         const { data } = await client.query({ query: GET_PAGE, variables: { slug: slugPath } });
//
//         if (!data?.page) return <p>Strona nie znaleziona</p>;
//
//         const blocks = data.page.editorBlocks;
//
//         return (
//             <div>
//                 <h1>{data.page.title}</h1>
//                 {blocks.map((block, idx) => {
//                     switch (block.__typename) {
//                         case "SemdesignM001SliderV1":
//                             return <SemdesignM001SliderV1 key={idx} blockData={block} />;
//                         case "CoreParagraph":
//                             return <div key={idx} dangerouslySetInnerHTML={{ __html: block.attributes.content }} />;
//                         case "CoreHeading":
//                             { const Tag = `h${block.attributes.level || 2}`;
//                             return <Tag key={idx} dangerouslySetInnerHTML={{ __html: block.attributes.content }} />; }
//                         default:
//                             return null;
//                     }
//                 })}
//             </div>
//         );
//     } catch (err) {
//         console.error("GraphQL fetch error:", err);
//         return <p>Wystąpił błąd podczas ładowania strony.</p>;
//     }
// }
