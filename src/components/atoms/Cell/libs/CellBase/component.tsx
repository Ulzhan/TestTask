import styled from '@emotion/styled';
import facepaint from 'facepaint';

import { Props } from './props';

const breakpoints = [576, 768, 992, 1200];

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

export const CellBase = styled.div<Props>`
  width: 100%;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
  ${mq({ height: ['30px', '40px', '60px', '70px'] })};
`;
