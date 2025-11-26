import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'http://o-headless-backend-next.local/graphql',  // process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_MAIN,
    }),
    cache: new InMemoryCache(),
});

export default client;
