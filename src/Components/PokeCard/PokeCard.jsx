import React, { useContext, useEffect } from 'react';
import { PokemonContext } from '../../Context/PokeContext';
import {
  CardContainer,
  DataContainer,
  ImgContainer,
  PokeImg,
  PokemonContainer,
  PokeTitle,
} from './PokeCardStyles';

function PokeCard() {
  const { pokemon } = useContext(PokemonContext);

  useEffect(() => {
    console.log(pokemon.data);
  }, [pokemon]);

  return (
    <PokemonContainer>
      {pokemon.data !== undefined && (
        <CardContainer>
          <DataContainer>
            <PokeTitle>{pokemon?.data?.name}</PokeTitle>
          </DataContainer>
          <ImgContainer>
            <PokeImg
              src={pokemon?.data?.sprites?.other.dream_world.front_default}
            />
          </ImgContainer>
        </CardContainer>
      )}
    </PokemonContainer>
  );
}

export default PokeCard;
