import React from 'react'
import { Link } from 'react-router-dom'

import * as S from './styles'

const Main = ({
  title = 'React Avancado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <Link to="/pokemons">Pokemons</Link>
  </S.Wrapper>
)

export default Main
