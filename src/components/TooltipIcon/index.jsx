import React from 'react';

import { Tooltip } from '@material-ui/core';
import { StyledIcon } from './styles';

const TooltipIcon = function TooltipIconComponent({ description, icon }) {
  return (
    <Tooltip title={description}>
      <StyledIcon aria-label={description}>{icon}</StyledIcon>
    </Tooltip>
  );
};

export default TooltipIcon;
