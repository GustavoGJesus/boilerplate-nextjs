import styled from 'styled-components';

export const Wrapper = styled.main`
  background-color: #ffff;
  color: #000;
  width: 100%;
  height: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 20rem;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const Description = styled.h2`
  font-size: 2rem;
  margin-top: 5px;
  font-weight: 400;
`;

export const Illustration = styled.img`
  width: min(80rem, 100%);
  border-radius: 20px;
  margin-top: 3rem;
`;
