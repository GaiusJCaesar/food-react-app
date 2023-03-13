import React from 'react';
import styled from 'styled-components';

const NavigationBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  height: 60px;
  padding: 0 20px;
`;

const NavigationLink = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0 10px;
`;

const TopNavigationBar = () => {
  return (
    <NavigationBar>
      <NavigationLink href="/">Home</NavigationLink>
      <NavigationLink href="/meal-selection">Meal Selection</NavigationLink>
    </NavigationBar>
  );
};

export default TopNavigationBar;
