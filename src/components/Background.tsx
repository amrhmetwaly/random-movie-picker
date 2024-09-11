import React from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #000000, #1a0033);
  overflow: hidden;
  z-index: -1;
`;

const Star = styled.div`
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
  animation: ${float} 3s infinite ease-in-out;
`;

const Galaxy = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background: radial-gradient(ellipse at center, #4b0082 0%, transparent 70%);
  border-radius: 50%;
  animation: ${spin} 100s infinite linear;
`;

const Ghost = styled.div`
  position: absolute;
  font-size: 3rem;
  animation: ${float} 4s infinite ease-in-out;
`;

export const Background: React.FC = () => {
    return (
        <BackgroundContainer>
            {[...Array(50)].map((_, i) => (
                <Star
                    key={i}
                    style={{
                        width: `${Math.random() * 3 + 1}px`,
                        height: `${Math.random() * 3 + 1}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDuration: `${Math.random() * 3 + 2}s`,
                        animationDelay: `${Math.random() * 2}s`,
                    }}
                />
            ))}
            <Galaxy style={{ top: '20%', left: '10%' }} />
            <Galaxy style={{ bottom: '10%', right: '20%' }} />
            <Ghost style={{ top: '30%', left: '20%' }}>👻</Ghost>
            <Ghost style={{ bottom: '20%', right: '30%' }}>👻</Ghost>
        </BackgroundContainer>
    );
};