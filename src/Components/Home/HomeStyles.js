import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

export const ButtonWithoutTask = styled.button`
  width: 160px;
  height: 160px;
  background-color: ${(props) => props.theme.highlight};

  font-size: 25px;
  border-radius: 50%;
  border: 5px solid white;
  cursor: pointer;
  color: #ffffff;
  font-weight: 900;
  &:hover {
    letter-spacing: 1px;
  }
  &:active {
    box-shadow: inset 3px 5px 7px 0px black;
  }
`;
export const ButtonWithTask = styled.button`
  width: 160px;
  height: 160px;
  background-color: ${(props) => props.theme.tertiary};
  font-size: 25px;
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  color: #ffffff;
  font-weight: 600;
  &:active {
    box-shadow: inset 3px 5px 7px 0px black;
  }
`;
