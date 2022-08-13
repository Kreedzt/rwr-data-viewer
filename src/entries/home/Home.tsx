import React, { FC, useCallback, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/Inbox';
import SearchIcon from '@mui/icons-material/Search';
import { menus } from './menus';
import { DrawerMenuItem } from './types';

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

const Home: FC = () => {
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const [titleInfo, setTitleInfo] = useState<DrawerMenuItem>({
        name: '主页',
        path: '/',
    });
    const navigate = useNavigate();

    const onOpenDrawer = useCallback(() => {
        setDrawerOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setDrawerOpen(false);
    }, []);

    const onDrawerMenuClick = useCallback(
        (m: DrawerMenuItem) => () => {
            console.log('> onDrawerMenuClick', m);
            setTitleInfo(m);
            setDrawerOpen(false);
            navigate(m.path);
        },
        [],
    );

    return (
        <div className="home">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                            onClick={onOpenDrawer}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', sm: 'block' },
                            }}
                        >
                            {titleInfo.name}
                        </Typography>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer open={drawerOpen} onClose={onCloseDrawer}>
                <Box sx={{ width: 250 }} role="presentation">
                    <List>
                        {menus.map((m) => (
                            <ListItem
                                key={m.path}
                                onClick={onDrawerMenuClick(m)}
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={m.name} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <Outlet />
        </div>
    );
};

export default Home;
