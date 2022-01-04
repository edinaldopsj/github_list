import { Card } from '@material-ui/core';
import styled from 'styled-components';

export const MainCard = styled(Card)`
  display: flex;
  min-height: 190px;

  :hover {
    cursor: pointer;
    border-top: 4px solid #58a6ff;
    border-left: 4px solid #58a6ff;
  }
`;
