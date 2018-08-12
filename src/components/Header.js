import React from 'react';
import { StyledHeader, StyledLogo, StyledButton } from '../styles/styles';

const Header = props => {
  return (
    <StyledHeader>
      <StyledLogo />
      <div className="flex-wrapper">
        <h1>Latest Blog Post</h1>
        <StyledButton onClick={props.addPost}>Add Post</StyledButton>
      </div>
    </StyledHeader>
  );
};

export default Header;
