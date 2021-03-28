import { keyframes } from "styled-components";

export const fadeIn = keyframes`
0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
`;

export const fadeIn2 = keyframes`
from {
    opacity: 0.5
  }
  to {
    opacity: 1
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1
  }
  to {
    opacity: 0
  }
`;

export const slideUp = keyframes`
from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
`;

export const slideDown = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(200px);
  }
`;

export const emerge = keyframes`
  0% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
`;
export const rotation = keyframes`
  from {
    transform: rotate( 0 );
  }
  to {
    transform: rotate( 15deg );
  }
`;

export const Hello = keyframes`
  0% {
    transform: rotate( 0 );
  }
  50% {
    transform: rotate( 15deg );
  }
  100% {
    transform: rotate( 0deg );
  }
`;
