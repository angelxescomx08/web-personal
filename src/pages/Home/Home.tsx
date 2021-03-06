import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Main } from './Sections/Main/Main';
import { Proyects } from './Sections/Proyects/Proyects';

const drawerWidth = 55;

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{
            display: 'flex',
            flexFlow: 'column wrap',
            backgroundColor: '#202227',height:'100vh',
            alignItems:' center',
            overflow: 'hidden',
            justifyContent: 'space-between'
            }}>
            <Toolbar />
            <Divider />
            <List>
                <ListItem button>
                    <FacebookIcon sx={{color: '#fff'}}/>
                </ListItem>

                <ListItem button>
                    <GitHubIcon sx={{color: '#fff'}}/>
                </ListItem>

                <ListItem button>
                    <EmailIcon sx={{color: '#fff'}}/>
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: '#202227',
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ 
                    width: { sm: drawerWidth }, 
                    flexShrink: { sm: 0 }, 
                    backgroundColor: '#202227',
                }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },       
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>


            <Box
                component="main"
                sx={{ 
                    flexGrow: 1, p: 3, 
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    backgroundColor: '#131417'
                }}
            >
                <Toolbar />
                <Main />
                <Proyects/>
            </Box>
        </Box>
    );
}
