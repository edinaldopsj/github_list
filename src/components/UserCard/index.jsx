import React from 'react';

import {
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';

import { Book, Group, Public } from '@material-ui/icons';

import logo from 'assets/logo.svg';

import TooltipIcon from 'components/TooltipIcon';

import { useNavigate } from 'react-router-dom';
import { MainCard } from './styles';

const UserCard = function UserCardComponent({
  avatarURL,
  userName,
  numberOfContributions = 0,
  numberOfFollowers = 0,
  numberOfReposAndGists = 0,
  dontShowFollowers = false,
  dontShowGists = false,
}) {
  const navigate = useNavigate();

  const navigateToUser = () => navigate(`/user/${userName}/details`);

  return (
    <MainCard variant="outlined" onClick={navigateToUser}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent style={{ flex: '1 1 auto' }}>
          <Typography variant="h6" color="textPrimary">
            {userName}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {!dontShowFollowers && (
            <TooltipIcon
              description={`${numberOfFollowers} Followers`}
              icon={<Group />}
            />
          )}

          <TooltipIcon
            description={`${numberOfContributions} Contributions`}
            icon={<Book />}
          />

          {!dontShowGists && (
            <TooltipIcon
              description={`${numberOfReposAndGists} Public repos and gists`}
              icon={<Public />}
            />
          )}
        </CardActions>
      </div>
      <Grid container justifyContent="flex-end">
        <CardMedia
          style={{ width: 150, height: 150 }}
          image={avatarURL || logo}
          title="This user avatar"
        />
      </Grid>
    </MainCard>
  );
};

export default UserCard;
