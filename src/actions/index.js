import { SET_POKEMON, SET_ERROR, CLEAR_ERROR } from './type';
import axios from 'axios';
import { getPokemons } from '../api/getPokemons';

export const SetPokemon = payload => ({
    type: SET_POKEMON,
    payload,
});

export const setError = (payload) => ({
    type: SET_ERROR,
    payload,
  });
  
export const clearError = (payload) => ({
    type: CLEAR_ERROR,
    payload,
  });

export const setPokemonsWithDetails = ()=> (dispatch) =>{
  getPokemons()
      .then((res) => {
        const pokemonList = res.data.results;
        return Promise.all(
          pokemonList.map((pokemon) => axios.get(pokemon.url))
        );
      })
      .then((pokemonResponses) => {
        const pokemonsWithDetails = pokemonResponses.map(
          (response) => response.data
        );
        dispatch(SetPokemon(pokemonsWithDetails));
      })
      .catch((error) => {
        dispatch(setError({ message: 'Ocurrió un error', error }));
      });
}

/*(pokemons = [] ) =>
    async (dispatch) => {
      try {
        const pokemonsWithDetails = await Promise.all(
          pokemons.map(async (pokemon) => {
            const pokemonDetail = await axios.get(pokemon.url);
            return pokemonDetail.data;
          })
        );
  
        dispatch(SetPokemon(pokemonsWithDetails));
      } catch (error) {
        dispatch(setError({ message: 'Oops! Something went wrong.', error }));
      }
};*/