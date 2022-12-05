import styled from 'styled-components';
import { FaWeightHanging } from 'react-icons/fa';
import { TbLineHeight } from 'react-icons/tb';

export const PokemonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.div`
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.highlight};
  padding: 30px;
  max-width: 300px;
  min-width: 230px;
  min-heigth: 350px;
  gap: 10px;
  border: 5px solid white;
`;

export const DataContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgContainer = styled.div`
  width: 40%;
  height: 90%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokeImg = styled.img`
  width: 180px;
  height: 200px;
`;

export const PokeTitle = styled.h3`
  font-size: 25px;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 25px 10px 0px 10px;
`;
