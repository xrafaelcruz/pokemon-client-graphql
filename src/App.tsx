import React, { Suspense } from 'react'
import { ApolloProvider } from '@apollo/client'

import client from 'apollo/client'

import Routes from './Routes'

import GlobalStyles from 'styles/global'

const App = () => (
  <ApolloProvider client={client}>
    <Suspense fallback={<div>Carregando...</div>}>
      <GlobalStyles />
      <Routes />
    </Suspense>
  </ApolloProvider>
)

export default App
