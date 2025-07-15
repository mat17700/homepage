import styled, { keyframes } from "styled-components";

const smokeEffect = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(10px) scale(0.8);
  }
  20% {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(1);
  }
  80% {
    opacity: 1;
    transform: translateX(-50%) translateY(-5px) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(-20px) scale(0.9);
  }
`;

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 25.625rem;

  @media (max-width: 1024px) {
    width: 22rem;
    max-width: 22rem;
  }

  @media (max-width: 768px) {
    width: 19.5rem;
    max-width: 19.5rem;
  }
`;

export const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3.5rem;
  background-color: #8000ff;
  color: #e1e1e6;
  text-decoration: none;
  padding: 0 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  transition: all 0.3s ease-in-out;
  text-align: center;
  box-sizing: border-box;
  font-size: 1rem;

  @media (max-width: 1024px) {
    padding: 0 1.25rem;
    white-space: normal;
    line-height: 1.2;
  }

  svg {
    margin-left: 0.25rem;
  }

  &:hover {
    background-color: #5500aa;
    transform: translateY(-0.125rem);
    text-decoration: none;
    color: #121214;
    box-shadow: 0 0.25rem 0.75rem rgba(128, 0, 255, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 0.125rem 0.375rem rgba(128, 0, 255, 0.2);
  }

  &:focus {
    outline: 2px solid rgba(128, 0, 255, 0.5);
    outline-offset: 2px;
  }
`;

export const Tooltip = styled.span`
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  background: #e1e1e6;
  color: #29292e;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: bold;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: ${smokeEffect} 2s ease-out forwards;
  z-index: 1000;

  @media (max-width: 768px) {
    font-size: 11px;
    padding: 6px 10px;
  }
`;

export const TooltipArrow = styled.span`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #c4c4cc;
`;
