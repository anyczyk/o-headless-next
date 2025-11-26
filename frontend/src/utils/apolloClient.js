// frontend/src/utils/apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export function createApolloClient(endpoint) {
    return new ApolloClient({
        link: new HttpLink({ uri: endpoint }),
        cache: new InMemoryCache(),
    });
}




// import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
//
// const client = new ApolloClient({
//     link: new HttpLink({
//         uri: 'http://o-headless-backend-next.local/graphql',  // process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_MAIN,
//     }),
//     cache: new InMemoryCache(),
// });
//
// export default client;
