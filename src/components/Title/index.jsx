import React from 'react';

import { Box, Grid, Typography } from '@material-ui/core';

import logo from 'assets/logo.svg';

import { GridContainer } from './styles';

const Title = function Title({ text }) {
  return (
    <GridContainer container justifyContent="center" alignContent="center">
      <Grid item>
        <img src={logo} alt="logo" width="140" />
      </Grid>
      <Grid item>
        <Box pt={4}>
          <Typography color="textPrimary" variant="h4">
            {text}
          </Typography>
        </Box>
      </Grid>
    </GridContainer>
  );
};

export default Title;
