import React from 'react';

import { Grid, Container } from '@material-ui/core';

import DEFAULT_MESSAGES from 'constants/defaultMessages';

import RepoCard from 'components/RepoCard';

const Repositories = function RepositoriesComponent({ repos, userName }) {
  return (
    <Container>
      <Grid container spacing={3}>
        {repos.map(item => {
          const {
            id,
            name = DEFAULT_MESSAGES.NO_REPO_INFO,
            description = '',
            language = '',
          } = item;

          return (
            <Grid key={id} item xs={4}>
              <RepoCard
                userName={userName}
                id={id}
                name={name}
                description={description}
                language={language}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Repositories;
