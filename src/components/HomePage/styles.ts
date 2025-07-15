import styled from "styled-components";

const breakpoints = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

export const Container = styled.div`
  width: 100%;
  max-width: 36.75rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: clamp(1rem, 2.5vw, 2rem);
  position: relative;

  @media (max-width: ${breakpoints.md}) {
    max-width: 100%;
    padding: clamp(1rem, 4vw, 1.5rem);
  }

  @media (max-width: ${breakpoints.sm}) {
    padding: 1rem 0.75rem;
    justify-content: flex-start;
    padding-top: 2rem;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: clamp(1rem, 2vw, 1.5rem);
`;

export const ProfileName = styled.h1`
  color: var(--text-primary);
  text-align: center;
  margin: 0.5rem 0 0 0;
  font-size: clamp(1.125rem, 2.5vw, 1.25rem);
  font-weight: 600;
  letter-spacing: -0.02em;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.875rem, 2vw, 1rem);
  width: 100%;
  align-items: center;
  margin: clamp(1rem, 2vw, 1.5rem) 0;
`;

export const Space = styled.div`
  width: clamp(35%, 8vw, 50%);
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--border-color) 50%,
    transparent 100%
  );
  margin: clamp(0.75rem, 1.5vw, 1rem) 0;
  transition: var(--transition);

  &:hover {
    background: linear-gradient(
      90deg,
      transparent 0%,
      var(--primary-color) 50%,
      transparent 100%
    );
    opacity: 0.6;
  }
`;

export const LargeSpace = styled(Space)`
  width: clamp(60%, 15vw, 100%);
`;
