import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ofc43601eo01z4cwwg4rk7/master',
    cache: new InMemoryCache()
})