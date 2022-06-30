import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './HeaderStyles';
import logo from '../../images/logo512.png';

export const Header = ({ setCoordinates }) => {
    const classes = useStyles();
    const [autocomplete, setAutoComplete] = useState(null);

    const onLoad = (autoComplete) => setAutoComplete(autoComplete);

    //Find New Lat and Lng of new location
    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();

        setCoordinates({ lat, lng });
    }

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
            <img src={logo} alt="searching logo" width="60px" />
                <Typography variant="h5" className={classes.title}>
                Restaurants, Hotels & Attractions <i>around you</i>
                </Typography>
                
                {/* //I have tried the search box but still not working, so I commented */}
                {/* <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Explore New Places
                    </Typography>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}> 
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                        </div>
                    </Autocomplete>
                </Box> */}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
