import React from 'react'
import { Grid } from 'semantic-ui-react';
import PokemonCard from '../PokemonCard';

const PokemonList = ({pokemons}) => {
  return (
    <>
        <h3>PokemonList</h3>
        <Grid>
            {pokemons.length>0 ? pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon}/>
            )) : <h2>No hay pokemons</h2>}
        </Grid>
    </>
  )
}

PokemonList.defaultProps = {
  pokemons: [],
}

export default PokemonList