import React from 'react';

import { Box, Button, Grid, Typography } from '@material-ui/core';

import DEFAULT_MESSAGES from 'constants/defaultMessages';

import NoImage from 'assets/noImage.png';
import { Link } from 'react-router-dom';
import { ImageContainer } from './styles';

const Profile = function ProfileComponent({ user }) {
  const {
    avatar_url = NoImage,
    name = DEFAULT_MESSAGES.NO_NAME_AVAILABLE,
    login = DEFAULT_MESSAGES.NO_LOGIN_AVAILABLE,
    bio = DEFAULT_MESSAGES.NO_BIO,
    followers = 0,
    following = 0,
    location = '',
    public_gists = 0,
    public_repos = 0,
  } = user;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <ImageContainer src={avatar_url} alt={name} />
      </Grid>
      <Grid item xs={12}>
        <Box mt={3}>
          <Typography color="textPrimary">{name}</Typography>
          <Typography color="textPrimary">{login}</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography align="justify" color="textPrimary">
          {bio}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography align="justify" color="textPrimary">
          Public Gists: {public_gists}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography align="justify" color="textPrimary">
          Public Repos: {public_repos}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography align="justify" color="textPrimary">
          Followers: {followers} | Following: {following}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography align="justify" color="textPrimary">
          Location: {location}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Link to="/">
          <Button color="primary">Go back</Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Profile;
