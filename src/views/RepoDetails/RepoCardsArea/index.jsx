import React from 'react';
import UserCard from 'components/UserCard';
import { Grid } from '@material-ui/core';

import { ContainerGrid } from './styles';

const RepoContributors = function RepoContributorComponent({
  contributors = [],
}) {
  return (
    <ContainerGrid
      container
      justifyContent="center"
      alignContent="center"
      spacing={2}
    >
      {contributors.map(item => {
        const { id = 0, avatar_url, login = '', contributions = 0 } = item;

        return (
          <Grid key={id} item xs={12} sm={4}>
            <UserCard
              avatarURL={avatar_url}
              numberOfContributions={contributions}
              userName={login}
              dontShowFollowers
              dontShowGists
            />
          </Grid>
        );
      })}
    </ContainerGrid>
  );
};

export default RepoContributors;
