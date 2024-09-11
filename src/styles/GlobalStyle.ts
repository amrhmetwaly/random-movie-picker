import { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FormControl } from '@mui/material';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #000;
  }

  * {
    box-sizing: inherit;
  }

  @import url('https://fonts.googleapis.com/css2?family=Creepster&display=swap');
`;

export const FullScreenModal = motion(styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(26, 26, 46, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0;
  border: none;
  z-index: 1300;
  outline: 0;
`);

export const HexflixLogo = styled.h1`
  font-family: 'Orbitron', sans-serif;
  color: #ff00ff;
  text-shadow: 0 0 10px #00ffff;
  margin-bottom: 2rem;
  text-align: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  color: #ff00ff;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;

  &:hover {
    color: #00ffff;
    transform: scale(1.2);
  }
`;

export const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  background-color: #1a1a2e;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 0 20px #00ffff;
`;

export const StyledSelectContainer = styled(FormControl)`
  width: 100%;
  margin-bottom: 1rem;

  .MuiInputBase-root {
    background-color: #16213e;
    color: #00ffff;
  }

  .MuiInputLabel-root {
    color: #00ffff;
  }

  .MuiInputBase-root:hover {
    border-color: #00ffff;
    box-shadow: 0 0 10px #00ffff;
  }

  .MuiMenuItem-root:hover {
    background-color: #0f3460;
    box-shadow: 0 0 10px #00ffff;
  }
`;

export const RandomizeButton = styled.button`
  background-color: #ff00ff;
  color: #000;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 5px;
  margin-bottom: 2rem;

  &:hover {
    background-color: #00ffff;
    transform: scale(1.05);
    box-shadow: 0 0 10px #00ffff;
  }
`;

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 2rem;
`;

export const MovieImage = styled.img`
  width: 300px;
  height: 450px;
  margin-bottom: 2rem;
  box-shadow: 0 0 15px #00ffff;
`;

export const MovieInfo = styled.div`
  text-align: center;
  h2 {
    margin-bottom: 1rem;
    color: #ff00ff;
    font-size: 2rem;
  }
  p {
    margin-bottom: 1rem;
    font-size: 1rem;
    line-height: 1.5;
  }
  .detail {
    font-size: 1rem;
    color: #00ffff;
    margin-bottom: 0.5rem;
  }
`;
