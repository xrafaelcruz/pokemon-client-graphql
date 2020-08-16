import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Pokemon } from 'api-types'

const POKEMONS = gql`
  query pokemons {
    pokemons {
      id
      name
    }
  }
`

const PokemonList = () => {
  const { loading, error, data } = useQuery(POKEMONS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return data.pokemons.map(({ id, name }: Pokemon) => (
    <div key={id}>
      <p>{name}</p>
    </div>
  ))
}

export default PokemonList
