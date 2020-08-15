import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'

const client = new ApolloClient<NormalizedCacheObject>({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache()
})

export default client
