import React from 'react';

import { Box, CardContent, Typography } from '@material-ui/core';

import { useNavigate } from 'react-router-dom';
import { MainCard } from './styles';

const RepoCard = function RepoCardComponent({
  name = '',
  description = '',
  language = '',
  userName = '',
}) {
  const navigate = useNavigate();

  const navigateToRepoDetails = () =>
    navigate(`/user/${userName}/repo/${name}/details`);

  return (
    <MainCard variant="outlined" onClick={navigateToRepoDetails}>
      <CardContent style={{ flex: '1 1 auto' }}>
        <Typography variant="h6" color="textPrimary">
          {name}
        </Typography>

        <Box my={2}>
          <Typography variant="body1" color="textPrimary">
            {description}
          </Typography>
        </Box>

        <Typography variant="body1" color="textPrimary">
          {language}
        </Typography>
      </CardContent>
    </MainCard>
  );
};

export default RepoCard;
