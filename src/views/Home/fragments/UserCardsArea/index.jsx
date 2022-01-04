import React from 'react';
import UserCard from 'components/UserCard';
import { Grid } from '@material-ui/core';

import { ContainerGrid } from './styles';

const UserCardsArea = function UserCardAreaComponent({ members = [] }) {
  return (
    <ContainerGrid
      container
      justifyContent="center"
      alignContent="center"
      spacing={2}
    >
      {members.map(item => {
        const {
          id = 0,
          avatarUrl,
          login,
          name,
          followers,
          gists,
          contributionsCollection,
        } = item.node;

        return (
          <Grid key={id} item xs={12} sm={4}>
            <UserCard
              avatarURL={avatarUrl}
              numberOfContributions={
                contributionsCollection?.totalCommitContributions || 0
              }
              numberOfFollowers={followers?.totalCount || 0}
              numberOfReposAndGists={gists?.totalCount || 0}
              userName={login || name}
            />
          </Grid>
        );
      })}
    </ContainerGrid>
  );
};

export default UserCardsArea;
