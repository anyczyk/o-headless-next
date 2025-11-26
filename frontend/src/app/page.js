// frontend/src/app/page.js
import { gql } from "@apollo/client";
import { createApolloClient } from "@/utils/apolloClient";
import SemdesignM001SliderV1 from "@/wp-components/blocks/SemdesignM001SliderV1";

export default async function HomePage() {
    const client = createApolloClient("http://o-headless-backend-next.local/graphql");
    const slugPath = "/";

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
}

// import SemdesignM001SliderV1 from "@/wp-components/blocks/SemdesignM001SliderV1";
// import { gql } from "@apollo/client";
// import client from "@/utils/apolloClient";
//
// export default async function HomePage() {
//     const slugPath = "/";
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
//     const { data } = await client.query({
//         query: GET_PAGE,
//         variables: { slug: slugPath },
//     });
//
//     if (!data?.page) return <p>Strona nie znaleziona</p>;
//
//     const blocks = data.page.editorBlocks;
//
//     return (
//         <div>
//             <h1>{data.page.title}</h1>
//             {blocks.map((block, idx) => {
//                 switch (block.__typename) {
//                     case "SemdesignM001SliderV1":
//                         return <SemdesignM001SliderV1 key={idx} blockData={block} />;
//                     case "CoreParagraph":
//                         return (
//                             <div
//                                 key={idx}
//                                 dangerouslySetInnerHTML={{ __html: block.attributes.content }}
//                             />
//                         );
//                     case "CoreHeading":
//                         const Tag = `h${block.attributes.level || 2}`;
//                         return (
//                             <Tag
//                                 key={idx}
//                                 dangerouslySetInnerHTML={{ __html: block.attributes.content }}
//                             />
//                         );
//                     default:
//                         return null;
//                 }
//             })}
//         </div>
//     );
// }
