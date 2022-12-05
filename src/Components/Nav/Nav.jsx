import React from 'react';
import { Navbar, NavContainer, NavDivisor, NavStyledLink } from './NavStyles';
import { AiOutlineHome } from 'react-icons/ai';

function Nav() {
  return (
    <Navbar>
      <NavDivisor>
        <NavContainer>
          <NavStyledLink to="/todo">To Do</NavStyledLink>
          <NavStyledLink to="/home">
            <AiOutlineHome />
          </NavStyledLink>

          <NavStyledLink to="/pokemon">Pokes</NavStyledLink>
        </NavContainer>
      </NavDivisor>
    </Navbar>
  );
}

export default Nav;
