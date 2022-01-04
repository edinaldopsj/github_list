import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Grid } from '@material-ui/core';
import Title from 'components/Title';

import { getUserDetails, getUserRepos } from 'providers/Github/useCases';

import Profile from './fragments/Profile';
import Repositories from './fragments/Repositories';

const UserDetails = function UserDetailComponent() {
  const { userName } = useParams();

  const [userDetails, setUserDetails] = useState({});
  const [userRepos, setUserRepos] = useState([]);

  const fetchUserData = useCallback(async () => {
    try {
      const userDetailsResponse = await getUserDetails({ userName });
      setUserDetails(userDetailsResponse?.data || {});

      const userReposResponse = await getUserRepos({ userName });
      setUserRepos(userReposResponse?.data || []);
    } catch (error) {
      console.error(error);
    }
  }, [userName]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => fetchUserData(), []);

  return (
    <Container>
      <Title text="GitHub User repos Page" />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <Profile user={userDetails} />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Repositories repos={userRepos} userName={userDetails?.login} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserDetails;
