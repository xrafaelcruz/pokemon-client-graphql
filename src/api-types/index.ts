export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
}

export enum PowerType {
  Normal = 'NORMAL',
  Fire = 'FIRE',
  Water = 'WATER',
  Rock = 'ROCK',
  Electric = 'ELECTRIC',
  Psychic = 'PSYCHIC',
  Ice = 'ICE',
  Ghost = 'GHOST',
  Bug = 'BUG',
  Poison = 'POISON',
  Flying = 'FLYING',
  Fighting = 'FIGHTING'
}

export type Attack = {
  __typename?: 'Attack'
  id: Scalars['ID']
  pokemonID: Scalars['ID']
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
}

export type InputAttack = {
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
}

export type Pokemon = {
  __typename?: 'Pokemon'
  id: Scalars['ID']
  name: Scalars['String']
  powerType?: Maybe<PowerType>
  description?: Maybe<Scalars['String']>
  attacks?: Maybe<Array<Maybe<Attack>>>
  image?: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  pokemon?: Maybe<Pokemon>
  pokemons?: Maybe<Array<Maybe<Pokemon>>>
}

export type QueryPokemonArgs = {
  id: Scalars['ID']
}

export type Mutation = {
  __typename?: 'Mutation'
  createPokemon: Pokemon
  updatePokemon: Pokemon
  deletePokemon: Scalars['Boolean']
}

export type MutationCreatePokemonArgs = {
  name: Scalars['String']
  powerType?: Maybe<PowerType>
  attacks?: Maybe<Array<Maybe<InputAttack>>>
}

export type MutationUpdatePokemonArgs = {
  id: Scalars['ID']
  name: Scalars['String']
  powerType?: Maybe<PowerType>
  attacks?: Maybe<Array<Maybe<InputAttack>>>
}

export type MutationDeletePokemonArgs = {
  id: Scalars['ID']
}

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}
