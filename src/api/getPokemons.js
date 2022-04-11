import axiosInstance from './config';
import axios from 'axios';

export const getPokemons = (limit = 151) => axiosInstance.get(`/pokemon?limit${limit}`);

export const getPokemonsWithDetails = ()=>{
    getPokemons()
      .then((res) => {
        const pokemonList = res.data.results;
        return Promise.all(pokemonList.map((pokemon) => axios.get(pokemon.url)));
      })
      .then((pokemonResponses) => {
        const pokemonsData = pokemonResponses.map((response) => response.data);
        return pokemonsData;
      })
}