/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Badge,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Tooltip,
  Stack,
  Paper,
  styled,
  Typography,
} from '@mui/material';
import {
  LinkedIn as LinkedInIcon,
  Search as SearchIcon,
  Home as HomeIcon,
  People as PeopleIcon,
  Work as WorkIcon,
  Message as MessageIcon,
  Notifications as NotificationsIcon,
  Apps as AppsIcon,
  ArrowDropDown as ArrowDropDownIcon,
} from '@mui/icons-material';

// Styled components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#ffffff',
  color: '#333333',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  zIndex: theme.zIndex.drawer + 1,
}));

const StyledSearchBox = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '4px 12px',
  backgroundColor: '#eef3f8',
  borderRadius: theme.shape.borderRadius,
  width: '100%',
  maxWidth: '300px',
  marginLeft: theme.spacing(2),
  transition: 'all 0.3s',
  '&:hover': {
    backgroundColor: '#e1e9f0',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
}));

const NavButton = styled(IconButton)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  color: '#666666',
  '&:hover': {
    color: '#000000',
  },
  '& .MuiTypography-root': {
    fontSize: '12px',
    fontWeight: 500,
    marginTop: '4px',
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    fontSize: '10px',
    height: '16px',
    minWidth: '16px',
  },
}));

const LinkedInHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledAppBar position="fixed">
      <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 1440, width: '100%', mx: 'auto' }}>
        {/* Left Section: Logo and Search */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* LinkedIn Logo */}
          <IconButton edge="start" sx={{ p: 0 }}>
            <LinkedInIcon sx={{ fontSize: 40, color: '#0a66c2' }} />
          </IconButton>

          {/* Search Box */}
          <StyledSearchBox elevation={0}>
            <SearchIcon sx={{ color: '#666666', mr: 1 }} />
            <InputBase
              placeholder="Search"
              sx={{
                width: '100%',
                fontSize: '14px',
                '& input': { padding: '4px 0' },
              }}
            />
          </StyledSearchBox>
        </Box>

        {/* Middle Section: Navigation Buttons */}
        <Stack direction="row" alignItems="center" spacing={3}>
          <Tooltip title="Home" arrow>
            <NavButton>
              <HomeIcon />
              <Typography>Home</Typography>
            </NavButton>
          </Tooltip>

          <Tooltip title="My Network" arrow>
            <NavButton>
              <PeopleIcon />
              <Typography>My Network</Typography>
            </NavButton>
          </Tooltip>

          <Tooltip title="Jobs" arrow>
            <NavButton>
              <WorkIcon />
              <Typography>Jobs</Typography>
            </NavButton>
          </Tooltip>

          <Tooltip title="Messaging" arrow>
            <NavButton>
              <StyledBadge badgeContent={2} color="error">
                <MessageIcon />
              </StyledBadge>
              <Typography>Messaging</Typography>
            </NavButton>
          </Tooltip>

          <Tooltip title="Notifications" arrow>
            <NavButton>
              <StyledBadge badgeContent={5} color="error">
                <NotificationsIcon />
              </StyledBadge>
              <Typography>Notifications</Typography>
            </NavButton>
          </Tooltip>
        </Stack>

        {/* Right Section: User Profile and Apps */}
        <Stack direction="row" alignItems="center" spacing={2}>
          {/* User Avatar */}
          <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleMenuOpen}>
            <Avatar sx={{ width: 32, height: 32 }} src="https://via.placeholder.com/150" />
            <ArrowDropDownIcon />
          </Box>

          {/* Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              elevation: 3,
              sx: { mt: 1, minWidth: 200 },
            }}
          >
            <MenuItem onClick={handleMenuClose}>View Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>

          {/* Apps Icon */}
          <Tooltip title="Apps" arrow>
            <IconButton>
              <AppsIcon sx={{ color: '#666666' }} />
            </IconButton>
          </Tooltip>
        </Stack>
      </Toolbar>
    </StyledAppBar>
  );
};

export default LinkedInHeader;
