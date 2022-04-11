import React, {useEffect} from 'react';
//import { getPokemons } from '../../api/getPokemons';
import PokemonList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';
import './styles.css';
//import { setPokemonsWithDetails} from '../../actions/index';
import {useDispatch, useSelector} from 'react-redux';
//import axios from 'axios';
import {/*SetPokemon, setError,*/ setPokemonsWithDetails} from '../../actions/index'


function Home() {
  const pokemons = useSelector((state) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPokemonsWithDetails())
  }, []);

  return (
    <div className='Home'>
      <Searcher />
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

export default Home;
