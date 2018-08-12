import styled from 'styled-components';

export const theme = {
  dark_blue: '#003a51',
  light_blue: '#d8e8ec',
  light_grey: '#dbdbdb',
  max_width: '900px',
  primary_font: '"Open Sans", helvetica, arial, sans-serif',
  breakpoints: {
    desk_xs: '1025px',
    tab_sm: '667px',
    mob_lg: '415px',
    mob_md: '375px',
    mob_sm: '325px'
  }
};

export const StyledApp = styled.div`
  position: relative;
  min-height: 100vh;
  font-family: ${theme.primary_font};
  color: ${theme.dark_blue};
`;

/* Header */

export const StyledHeader = styled.header`
  padding: 3em 8em 4em 4em;
  background: ${theme.light_blue};
  max-width: ${theme.max_width};
  margin: 0 auto 4rem;
  @media (max-width: ${theme.breakpoints.desk_xs}) {
    padding: 3em 4em 4em 2em;
  }
  @media (max-width: ${theme.breakpoints.tab_sm}) {
    padding: 2em 1em 2em 1em;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: 400;
    margin: 0;
    @media (max-width: ${theme.breakpoints.tab_sm}) {
      margin-bottom: 1rem;
    }
    @media (max-width: ${theme.breakpoints.mob_lg}) {
      font-size: 1.75rem;
    }
  }
  .flex-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: ${theme.breakpoints.tab_sm}) {
      display: block;
    }
  }
`;

export const StyledButton = styled.button`
  padding: 1em 1.75em;
  background: ${theme.dark_blue};
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.875rem;
  margin: auto 0;
  border-radius: 5px;
  @media (max-width: ${theme.breakpoints.mob_lg}) {
    font-size: 0.75rem;
  }
`;

export const StyledLogo = styled.img.attrs({
  src: '/images/logo.svg'
})`
  width: 200px;
  margin-bottom: 5rem;
  @media (max-width: ${theme.breakpoints.tab_sm}) {
    width: 150px;
    margin-bottom: 1rem;
  }
`;

/* Posts */

export const StyledPostsContainer = styled.div`
  max-width: ${theme.max_width};
  margin: 0 auto;
  padding: 0 8em 4em 4em;
  @media (max-width: ${theme.breakpoints.desk_xs}) {
    padding: 0 4em 4em 2em;
  }
  @media (max-width: ${theme.breakpoints.mob_lg}) {
    padding: 0 1em 2em 1em;
  }
  @media (max-width: ${theme.breakpoints.mob_sm}) {
    padding: 0 0.25em 2em 0.25em;
  }
`;

export const StyledPost = styled.article`
  position: relative;
  background: ${theme.light_grey};
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  @media (max-width: ${theme.breakpoints.tab_sm}) {
    display: block;
  }
`;

export const StyledPostContent = styled.div`
  font-size: 0.875rem;
  padding: 1em 2em;
  width: 100%;
  time {
    display: block;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0.675rem;
  }
  h2 {
    margin-bottom: 0.5rem;
    width: 85%;
  }
  p {
    margin: 0;
    font-size: 0.8125rem;
  }
`;

/* Post actions */

export const StyledPostActions = styled.div`
  display: flex;
  justify-content: flex-start;
  position: absolute;
  top: 0;
  right: 0;
  &:before {
    content: '';
    height: 1em;
    background: #fff;
    width: 1px;
    left: 50%;
    top: 0;
    position: relative;
    margin: auto;
  }
  @media (max-width: ${theme.breakpoints.tab_sm}) {
    position: relative;
  }
`;

export const StyledPostImg = styled.img.attrs({
  src: props => props.src,
  alt: props => props.alt
})`
  width: 240px;
  @media (max-width: ${theme.breakpoints.tab_sm}) {
    width: 100%;
  }
`;

export const StyledPostActionButton = styled.button`
  background: ${theme.dark_blue};
  padding: 0.75em 2em;
  color: #fff;
  font-family: ${theme.primary_font};
  font-size: 0.75rem;
  font-weight: 600;
  width: 7em;
`;

/* Modal */

export const StyledModal = styled.div`
  display: ${props => (props.open ? `block` : `none`)};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 3em 5em;
  font-family: ${theme.primary_font};
  background: ${theme.light_grey};
  width: 95%;
  margin: auto;
  max-width: 650px;
  z-index: 2;
  box-shadow: 0 2px 4px 0 rgba(26, 26, 26, 0.25);
  @media (max-width: ${theme.breakpoints.tab_sm}) {
    padding: 2em;
    top: 40%;
  }
  @media (max-width: ${theme.breakpoints.mob_lg}) {
    padding: 1em 0.75em;
  }
  button {
    text-transform: none;
  }
`;

export const StyledModalBackdrop = styled.div`
  display: ${props => (props.open ? `block` : `none`)};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${theme.light_blue};
  z-index: 1;
  opacity: 0.9;
`;

export const StyledInput = styled.input.attrs({
  type: 'text',
  placeholder: props => props.placeholder
})`
  width: 100%;
  border: 0;
  margin: 0;
  margin-bottom: 0.675rem;
  line-height: 2.5;
  padding: 0.5em 1em;
  border-radius: 5px;
  font-family: inherit;
  font-size: 0.875rem;
`;

export const StyledTextarea = styled.textarea.attrs({
  placeholder: props => props.placeholder
})`
  width: 100%;
  border: 0;
  margin: 0;
  margin-bottom: 1.25rem;
  height: 120px;
  padding: 0.5em 1em;
  border-radius: 5px;
  resize: none;
  font-family: inherit;
  font-size: 0.875rem;
`;

/* Loading Spinner */

export const StyledSpinner = styled.div`
  .circle {
    margin: 125px auto;
    width: 50px;
    height: 50px;
    position: relative;
  }
  .circle .child {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .circle .child:before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: ${theme.dark_blue};
    border-radius: 100%;
    animation: circleBounceDelay 1.2s infinite ease-in-out both;
  }
  .circle .circle2 {
    transform: rotate(30deg);
  }
  .circle .circle3 {
    transform: rotate(60deg);
  }
  .circle .circle4 {
    transform: rotate(90deg);
  }
  .circle .circle5 {
    transform: rotate(120deg);
  }
  .circle .circle6 {
    transform: rotate(150deg);
  }
  .circle .circle7 {
    transform: rotate(180deg);
  }
  .circle .circle8 {
    transform: rotate(210deg);
  }
  .circle .circle9 {
    transform: rotate(240deg);
  }
  .circle .circle10 {
    transform: rotate(270deg);
  }
  .circle .circle11 {
    transform: rotate(300deg);
  }
  .circle .circle12 {
    transform: rotate(330deg);
  }
  .circle .circle2:before {
    animation-delay: -1.1s;
  }
  .circle .circle3:before {
    animation-delay: -1s;
  }
  .circle .circle4:before {
    animation-delay: -0.9s;
  }
  .circle .circle5:before {
    animation-delay: -0.8s;
  }
  .circle .circle6:before {
    animation-delay: -0.7s;
  }
  .circle .circle7:before {
    animation-delay: -0.6s;
  }
  .circle .circle8:before {
    animation-delay: -0.5s;
  }
  .circle .circle9:before {
    animation-delay: -0.4s;
  }
  .circle .circle10:before {
    animation-delay: -0.3s;
  }
  .circle .circle11:before {
    animation-delay: -0.2s;
  }
  .circle .circle12:before {
    animation-delay: -0.1s;
  }

  @-webkit-keyframes circleBounceDelay {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }

  @keyframes circleBounceDelay {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`;
