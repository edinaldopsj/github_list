import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Button, Container, Grid } from '@material-ui/core';

import Title from 'components/Title';
import { getRepoContributors, getRepoDetails } from 'providers/Github/useCases';
import RepoCardsArea from './RepoCardsArea';

const RepoDetails = function RepoDetailComponent() {
  const { userName, repoName } = useParams();

  const [repoDetails, setRepoDetails] = useState({});
  const [repoContributors, setRepoContributors] = useState([]);

  const fetchRepoData = useCallback(async () => {
    try {
      const repoDetailsResponse = await getRepoDetails({ userName, repoName });

      setRepoDetails(repoDetailsResponse?.data);

      const repoContributorsResponse = await getRepoContributors({
        userName,
        repoName,
      });

      setRepoContributors(repoContributorsResponse?.data);
    } catch (error) {
      console.error(error);
    }
  }, [repoName, userName]);

  useEffect(() => {
    fetchRepoData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Title text="Contributors for this repository" />
      <Grid container justifyContent="center">
        <Grid item>
          <Link to="/">
            <Button color="primary">Go back</Button>
          </Link>
        </Grid>
      </Grid>
      <RepoCardsArea details={repoDetails} contributors={repoContributors} />
    </Container>
  );
};

export default RepoDetails;
