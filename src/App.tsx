import React, { useState } from 'react';
import styled from 'styled-components';
import { MovieSelector } from './components/MovieSelector.tsx';
import { Background } from './components/Background.tsx';
import { GlobalStyle } from './styles/GlobalStyle.ts';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: #fff;
  font-family: 'Creepster', cursive;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-shadow: 0 0 10px #ff6600;
`;

export const App: React.FC = () => {
    const [selectedMovie, setSelectedMovie] = useState<string | null>(null);

    return (
        <>
            <GlobalStyle />
            <Background />
            <AppContainer>
                <Title>{'FearFix'.toUpperCase()}</Title>
                <MovieSelector onSelectMovie={setSelectedMovie} />
                {selectedMovie && <p>You must watch: {selectedMovie}</p>}
                {!selectedMovie && <p>Select a movie or the ghosts will get you!</p>}
            </AppContainer>
        </>
    );
};

export default App;