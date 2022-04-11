import React from 'react';
import { Grid, Icon, Image, Label } from 'semantic-ui-react';
import {MAIN_COLOR, FAV_COLOR} from '../../utils/constants';
import './styles.css';

const PokemonCard = ({pokemon}) => {
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
        <div className='PokemonCard'>
            <Icon name='favorite' color={FAV_COLOR}/>
            <Image src={pokemon.sprites.front_shiny} alt='Pokemon Image'/>
            <p className='PokemonCard-title'>{pokemon.name}</p>
            {pokemon.types.map(type => <Label key={`${pokemon.id}-${type.type.name}`} color={MAIN_COLOR}>{type.type.name}</Label>)}
        </div>
    </Grid.Column>
  )
}

export default PokemonCard;