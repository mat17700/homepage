import styled from "styled-components";

export const SocialLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: clamp(0.5rem, 1.5vw, 0.75rem);
`;

export const AuthorText = styled.p`
  color: var(--text-secondary);
  font-size: clamp(0.8125rem, 2vw, 0.875rem);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  text-align: center;
  font-weight: 500;

  svg {
    color: var(--primary-color);
    filter: drop-shadow(0 0 4px rgba(128, 0, 255, 0.3));
  }
`;

export const AuthorName = styled.span`
  color: var(--primary-color);
  font-weight: 700;
  text-shadow: 0 0 8px rgba(128, 0, 255, 0.3);
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  gap: clamp(0.75rem, 2vw, 1rem);
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(0.5rem, 1.5vw, 0.625rem);
  border-radius: var(--border-radius);
  border: 1px solid transparent;
  color: var(--text-secondary);
  transition: var(--transition);
  position: relative;
  min-width: clamp(2.5rem, 6vw, 2.75rem);
  min-height: clamp(2.5rem, 6vw, 2.75rem);
  backdrop-filter: blur(10px);

  &:hover {
    color: var(--primary-color);
    border-color: var(--primary-color);
    background: rgba(128, 0, 255, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(128, 0, 255, 0.2);
  }

  &:active {
    transform: translateY(0) scale(0.95);
  }

  &::before {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(8px);
    background: var(--background-primary);
    color: var(--text-primary);
    padding: clamp(0.375rem, 1vw, 0.5rem) clamp(0.5rem, 1.5vw, 0.75rem);
    border-radius: var(--border-radius);
    font-size: clamp(0.6875rem, 1.8vw, 0.75rem);
    font-weight: 600;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
    pointer-events: none;
    z-index: 10;
    border: 1px solid rgba(128, 0, 255, 0.2);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(14px);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid var(--background-primary);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
    pointer-events: none;
    z-index: 10;
  }

  &:hover::before,
  &:hover::after {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(-8px);
  }

  &:hover::after {
    transform: translateX(-50%) translateY(-2px);
  }
`;

export const Copyright = styled.p`
  position: fixed;
  bottom: clamp(0.5rem, 2vw, 1rem);
  right: clamp(0.5rem, 2vw, 1rem);
  color: var(--text-muted);
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  font-weight: 500;
  z-index: 1000;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  backdrop-filter: blur(10px);

  @media (max-width: 576px) {
    position: relative;
    bottom: auto;
    right: auto;
    margin-top: 1rem;
    text-align: center;
    background: transparent;
    border: none;
    backdrop-filter: none;
  }
`;
