import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import Link from '@material-ui/core/Link';
import StorefrontIcon from '@material-ui/icons/Storefront';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    font: {
        color: 'rgb(58, 58, 58)',
        padding: '3px 10px',
        fontSize: '15px',
        fontFamily: 'Raleway,sans-serif',
        fontWeight: 'bold'
    },
    typo: {
        textAlign: 'center',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function Header() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const renderRounter = (
        <Typography className={classes.typo}>
            <Link className={classes.font} href="/order">
                Order
            </Link>
            <Link className={classes.font} href="/support">
                Support a Cause
            </Link>
            <Link className={classes.font} href="/partner">
                Partnet With Us
            </Link>
            <Link className={classes.font} href="/gallery">
                Gallery
            </Link>
            <Link className={classes.font} href="/blog">
                Blog
            </Link>
            <Link className={classes.font} href="/story">
                Our Story
            </Link>
        </Typography>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <Link className={classes.font} href="/order">
                    Order
                </Link>
            </MenuItem>
            <MenuItem>
                <Link className={classes.font} href="/support">
                    Support a Cause
                </Link>
            </MenuItem>
            <MenuItem >
                <Link className={classes.font} href="/partner">
                    Partnet With Us
                </Link>
            </MenuItem>
            <MenuItem >
                <Link className={classes.font} href="/gallery">
                    Gallery
                </Link>
            </MenuItem>
            <MenuItem >
                <Link className={classes.font} href="/blog">
                    Blog
                </Link>
            </MenuItem>
            <MenuItem >
                <Link className={classes.font} href="/story">
                    Our Story
                </Link>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar style={{ backgroundColor: 'white' }} position="static">
                <Toolbar style={{ textAlign: 'end', margin: '1%' }}>
                    <Link href="/">
                        <img alt={'logo'} src="//cdn.shopify.com/s/files/1/0302/0714/8116/files/logo_black_horizontal_300x300.png" width={200}></img>
                    </Link>
                    <div className={classes.sectionDesktop} style={{ marginLeft: '20%' }}>
                        {renderRounter}
                    </div>
                    <div className={classes.grow} >

                        <IconButton color="inherit">
                            <SearchIcon style={{ color: '#3a3a3a' }} />
                        </IconButton>
                        <Link href="/login">
                            <IconButton color="inherit">
                                <PersonIcon style={{ color: '#3a3a3a' }} />
                            </IconButton>
                        </Link>
                        <Link href="/cart">
                            <IconButton
                                edge="end"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <StorefrontIcon style={{ color: '#3a3a3a' }} />
                            </IconButton>
                        </Link>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MenuIcon style={{ color: '#3a3a3a' }} />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}

            {renderMenu}
        </div>
    );
}