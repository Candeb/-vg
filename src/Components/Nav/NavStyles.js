import styled from 'styled-components';
import { StyledLink } from '../Global/Global';

export const Navbar = styled.nav`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.highlight};
  border-bottom: 3px solid white;
`;

export const NavContainer = styled.nav`
  height: 100%;
  width: 90%;
  max-width: 1300px;
  gap: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavDivisor = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavStyledLink = styled(StyledLink)`
  font-size: 25px;
  color: #ffffff;
  &:hover {
    color: #d9e3f0;
  }
`;
