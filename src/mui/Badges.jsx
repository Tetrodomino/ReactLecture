import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { Stack } from '@mui/material';

import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function Badges() {
    return (
    /*
        badgeContent = badge에 표시될 숫자의 값
    */
    <Stack style={{marginTop: 30}} spacing={2} direction="row">
        <Badge badgeContent={3} color="primary">
            <MailIcon color="action" />
        </Badge>
        <Badge badgeContent={4} color="secondary">
            <MailIcon color="action" />
        </Badge>
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>
    </Stack>
    );
}