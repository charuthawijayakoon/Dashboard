import React from 'react'
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Avatar from '@mui/material/Avatar';

// Import Drawer Functionalities ===============================================================================
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import HomeIcon from '@mui/icons-material/Home';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

// Importing Images ============================================================================================
import poster from '../Img/poster.png';
import Girl from '../Img/Girl.png';
import controlcenterlogo from '../Img/controlcenterlogo.png';

// Importing Icons =============================================================================================

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SettingsIcon from '@mui/icons-material/Settings';
import PolicyIcon from '@mui/icons-material/Policy';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

// Importing 7-1 architechture sass files on main.scss ==========================================================
import '../SASS/main.scss';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));





// Import Drawer Functionalities ===============================================================================
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
}

// Importing Search Criteria  ===================================================================================
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

export const DetailPage = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <AppBar className='header--white' position="fixed" open={open}>
          <Toolbar>
            <IconButton aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={{ mr: 2, ...(open && { display: 'none' }) }} >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              {/* Persistent drawer */}
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer className='hamburger-menu--drawer' sx={{ width: drawerWidth, flexShrink: 0 }} variant="persistent" anchor="left" open={open} >
          <DrawerHeader className='drawer--left-blue'> 
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? ( <ChevronLeftIcon /> ) : ( <ChevronRightIcon /> )}
            </IconButton>
          </DrawerHeader>
          <List className='drawer--left-blue'>
            {['Home', 'Underwriting', 'Finance', 'Re-Insuarance', 'Claims', 'System Administration', 'Sales & Marketing', 'Approvals'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon className='icon-drawer'>
                    {index % 2 === 0 ? <HomeIcon /> : <BorderColorIcon  />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        {/* ==================================================================================================================== */}

        <Main open={open} className='side--borders'>

            <Stack className='grid--structure' spacing={0} direction='row'>

                <Stack  className='middle-grid--structure' spacing={0} direction='column'>

                    {/* <Grid>
                        <div className='header-container'></div>
                    </Grid> */}

                    <Grid>
                        <div className='dashboard-header--container'>
                          <Stack className='header-typography' direction='row'>
                            <Stack className='header-typography--sub' direction='row'>
                              <img className='controlcenterlogo-image' src={controlcenterlogo} />
                              <Stack className="name-typography" direction='row' spacing={1}>
                                <div className='typography-Control'>Control</div>
                                <Stack className='typography-Center-Dashboard' direction='row' spacing={1}>
                                  <div className='typography-Center'>Center</div>
                                  <div className='typography-Dashboard'>Dashboard</div>
                                </Stack>
                              </Stack>
                            </Stack>
                            <div className="header-typography--search">
                              <Search className='search-criteria'>
                                  <StyledInputBase className='input--searchbar' placeholder="Search" inputProps={{ 'aria-label': 'search' }} />
                                  <SearchIconWrapper className='search-grey--container'>
                                    <Stack className='search-icon--container' direction='row' spacing={1}>
                                      <div className='search--criteria-icon'><SearchIcon /></div>
                                      <div className='search--criteria-text'>Search</div>
                                    </Stack>
                                  </SearchIconWrapper>
                              </Search>
                            </div>
                          </Stack>
                        </div>
                    </Grid>

                    <Grid className ='grid grid--container-grey'>

                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >

                                <Grid xs={2} sm={4} md={4}>
                                    <Item className='heading--card main--title-medical'>
                                        <SettingsIcon className='icon--card-logo'/>
                                            <Stack className='title-iconexpand--content' spacing={1} direction='column'>
                                                <Stack className='colorcard-title--text' spacing={2} direction='column'>
                                                    <div className="title-text--line1">System Administration</div>
                                                    <div className="title-text--line2">Allow you to access the System Administration.</div>
                                                </Stack>
                                                <Stack className='expand-textarrow--content' spacing={0.5} direction='row'>
                                                    <Stack className='expand-text'>Explore</Stack>
                                                    <Stack className='expand-forward--icon'><ArrowForwardIcon fontSize='small'/></Stack>
                                                </Stack>
                                            </Stack>
                                    </Item>
                                </Grid>

                                <Grid xs={2} sm={4} md={4}>
                                    <Item className='heading--card main--title-medical'>
                                        <PolicyIcon className='icon--card-logo'/>
                                            <Stack className='title-iconexpand--content' spacing={1} direction='column'>
                                                <Stack className='colorcard-title--text' spacing={2} direction='column'>
                                                    <div className="title-text--line1">Policy Center</div>
                                                    <div className="title-text--line2">Allow you to access the Policy Center.</div>
                                                </Stack>
                                                <Stack className='expand-textarrow--content' spacing={0.5} direction='row'>
                                                    <Stack className='expand-text'>Explore</Stack>
                                                    <Stack className='expand-forward--icon'><ArrowForwardIcon fontSize='small'/></Stack>
                                                </Stack>
                                            </Stack>
                                    </Item>
                                </Grid>

                                <Grid xs={2} sm={4} md={4}>
                                    <Item className='heading--card main--title-medical'>
                                        <TrackChangesIcon className='icon--card-logo'/>
                                            <Stack className='title-iconexpand--content' spacing={1} direction='column'>
                                                <Stack className='colorcard-title--text' spacing={2} direction='column'>
                                                    <div className="title-text--line1">Workflow Center</div>
                                                    <div className="title-text--line2">Allow you to access the Workflow Center.</div>
                                                </Stack>
                                                <Stack className='expand-textarrow--content' spacing={0.5} direction='row'>
                                                    <Stack className='expand-text'>Explore</Stack>
                                                    <Stack className='expand-forward--icon'><ArrowForwardIcon fontSize='small'/></Stack>
                                                </Stack>
                                            </Stack>
                                    </Item>
                                </Grid>

                                <Grid xs={2} sm={4} md={4}>
                                    <Item className='heading--card main--title-medical'>
                                        <MonetizationOnOutlinedIcon className='icon--card-logo'/>
                                            <Stack className='title-iconexpand--content' spacing={1} direction='column'>
                                                <Stack className='colorcard-title--text' spacing={2} direction='column'>
                                                    <div className="title-text--line1">Finance</div>
                                                    <div className="title-text--line2">Allow you to access the Finance module.</div>
                                                </Stack>
                                                <Stack className='expand-textarrow--content' spacing={0.5} direction='row'>
                                                    <Stack className='expand-text'>Explore</Stack>
                                                    <Stack className='expand-forward--icon'><ArrowForwardIcon fontSize='small'/></Stack>
                                                </Stack>
                                            </Stack>
                                    </Item>
                                </Grid>

                                <Grid xs={2} sm={4} md={4}>
                                    <Item className='heading--card main--title-medical'>
                                        <ShoppingCartOutlinedIcon className='icon--card-logo'/>
                                            <Stack className='title-iconexpand--content' spacing={1} direction='column'>
                                                <Stack className='colorcard-title--text' spacing={2} direction='column'>
                                                    <div className="title-text--line1">Sales and Marketing</div>
                                                    <div className="title-text--line2">Allow you to access the Sales and Marketing module.</div>
                                                </Stack>
                                                <Stack className='expand-textarrow--content' spacing={0.5} direction='row'>
                                                    <Stack className='expand-text'>Explore</Stack>
                                                    <Stack className='expand-forward--icon'><ArrowForwardIcon fontSize='small'/></Stack>
                                                </Stack>
                                            </Stack>
                                    </Item>
                                </Grid>

                                <Grid xs={2} sm={4} md={4}>
                                    <Item className='heading--card main--title-medical'>
                                        <PersonOutlineOutlinedIcon className='icon--card-logo'/>
                                            <Stack className='title-iconexpand--content' spacing={1} direction='column'>
                                                <Stack className='colorcard-title--text' spacing={2} direction='column'>
                                                    <div className="title-text--line1">Customer Management</div>
                                                    <div className="title-text--line2">Allow you to access the Customer Management.</div>
                                                </Stack>
                                                <Stack className='expand-textarrow--content' spacing={0.5} direction='row'>
                                                    <Stack className='expand-text'>Explore</Stack>
                                                    <Stack className='expand-forward--icon'><ArrowForwardIcon fontSize='small'/></Stack>
                                                </Stack>
                                            </Stack>
                                    </Item>
                                </Grid>
                                
                            </Grid>
                        </Box>

                    </Grid>
    
                    <Grid className="footer-container">
                        <footer>© 2010-2022 Informatics International Limited. All Rights Reserved</footer>
                    </Grid>

                </Stack>               

            </Stack>

        </Main>

        <Grid className='drawer--right'> </Grid>

        {/* <AppBar className='footer-container' position="fixed">
          <Toolbar>
            <Typography variant="h6" noWrap component="div">© 2010-2022 Informatics International Limited. All Rights Reserved</Typography>
            <footer>© 2010-2022 Informatics International Limited. All Rights Reserved</footer>
          </Toolbar>
        </AppBar> */}

      </Box>
    );
  }
  