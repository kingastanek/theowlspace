import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 10%;
  width: 100%;
`;

export const ShapesWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
`;

export const CircleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const TechnologyCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid var(--theme-black);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--theme-white);
  z-index: 2;
`;

export const TechnologyContainer = styled.div`
  width: 20%;
  height: 150px;
  border-radius: 20px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  position: absolute;
  flex-direction: column;
`;

export const TechnologyWrapper = styled.div`
  /* position: absolute; */
`;

export const TechnologyName = styled.p`
  font-size: 2rem;
`;
