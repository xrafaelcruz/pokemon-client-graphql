import React from 'react'
import { usePokemonsQuery } from 'api-types'

const PokemonList = () => {
  const { loading, error, data } = usePokemonsQuery()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const pokemons = data && data.pokemons

  return (
    <>
      {pokemons?.map((pokemon) => (
        <div key={pokemon?.id}>
          <p>{pokemon?.name}</p>
        </div>
      ))}
    </>
  )
}

export default PokemonList
