import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Badge,
  Box,
  Stack,
  Avatar,
  styled,
  Tooltip,
} from '@mui/material';
import {
  Search as SearchIcon,
  Home as HomeIcon,
  People as PeopleIcon,
  Work as WorkIcon,
  Message as MessageIcon,
  Notifications as NotificationsIcon,
  Apps as AppsIcon,
  Business as BusinessIcon,
} from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Styled components
const StyledAppBar = styled(AppBar)({
  backgroundColor: 'white',
  color: '#666666',
  boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
});

const SearchWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#EEF3F8',
  borderRadius: 4,
  padding: '4px 8px',
  width: '280px',
  marginLeft: '8px',
});

const NavButton = styled(IconButton)({
  flexDirection: 'column',
  color: '#666666',
  '&:hover': {
    color: '#000000',
  },
  '& .MuiTypography-root': {
    fontSize: '12px',
    marginTop: '4px',
  },
});

const HeaderDivider = styled(Box)({
  width: '1px',
  height: '32px',
  backgroundColor: '#EBEBEB',
  margin: '0 8px',
});

const LinkedInHeader = () => {
  return (
    <StyledAppBar position="fixed">
      <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 1128, width: '100%', mx: 'auto' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton size="large" edge="start">
            <LinkedInIcon sx={{ color: '#0a66c2', fontSize: 40 }} />
          </IconButton>
          
          <SearchWrapper>
            <SearchIcon sx={{ color: '#666666', mr: 1 }} />
            <InputBase
              placeholder="Search"
              sx={{ width: '100%' }}
            />
          </SearchWrapper>
        </Box>

        <Stack direction="row" alignItems="center" spacing={1}>
          <Tooltip title="Home">
            <NavButton>
              <HomeIcon />
              <Box component="span" sx={{ fontSize: '12px' }}>Home</Box>
            </NavButton>
          </Tooltip>

          <Tooltip title="My Network">
            <NavButton>
              <PeopleIcon />
              <Box component="span" sx={{ fontSize: '12px' }}>My Network</Box>
            </NavButton>
          </Tooltip>

          <Tooltip title="Jobs">
            <NavButton>
              <WorkIcon />
              <Box component="span" sx={{ fontSize: '12px' }}>Jobs</Box>
            </NavButton>
          </Tooltip>

          <Tooltip title="Messaging">
            <NavButton>
              <Badge badgeContent={1} color="error">
                <MessageIcon />
              </Badge>
              <Box component="span" sx={{ fontSize: '12px' }}>Messaging</Box>
            </NavButton>
          </Tooltip>

          <Tooltip title="Notifications">
            <NavButton>
              <Badge badgeContent={1} color="error">
                <NotificationsIcon />
              </Badge>
              <Box component="span" sx={{ fontSize: '12px' }}>Notifications</Box>
            </NavButton>
          </Tooltip>

          <Tooltip title="Me">
            <NavButton>
              <Avatar
                sx={{ width: 24, height: 24 }}
                src="https://via.placeholder.com/24"
              />
              <Box component="span" sx={{ fontSize: '12px' }}>Me</Box>
            </NavButton>
          </Tooltip>

          <HeaderDivider />

          <Tooltip title="For Business">
            <NavButton>
              <AppsIcon />
              <Box component="span" sx={{ fontSize: '12px' }}>For Business</Box>
            </NavButton>
          </Tooltip>

          <Tooltip title="Sales Nav">
            <NavButton>
              <Badge badgeContent={1} color="error">
                <BusinessIcon />
              </Badge>
              <Box component="span" sx={{ fontSize: '12px' }}>Sales Nav</Box>
            </NavButton>
          </Tooltip>
        </Stack>
      </Toolbar>
    </StyledAppBar>
  );
};

export default LinkedInHeader;