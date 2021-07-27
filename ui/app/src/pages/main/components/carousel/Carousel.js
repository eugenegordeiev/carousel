import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { resourcesURL } from 'apis/ApiClient';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import ImageGallery from 'react-image-gallery';
import { MainContacts } from 'pages/main';
import styles from './Carousel.css.js';
import "shared/sass/App.scss";
import Tooltip from '@material-ui/core/Tooltip';
import { useParams } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => styles(theme));

const Carousel = ({data}) => {

    const classes = useStyles();
    const [index, setIndex] = useState(0);
    let   { imageType } = useParams();

    useEffect(() => {
        setIndex(0);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imageType]);

    const handleNextButton = () => {
        setIndex(index+1);
    };

    const handlePrevButton = () => {
        setIndex(index-1);
    };

    const handleIndicatorClick = (index) => {

        console.log('handleIndicatorClick', index);
        setIndex(index);
    };

    return (
        <div className={classes.root}>
            <Grid
                className={classes.grid}
                container
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Grid item xs={1} className={classes.prevContainer}>
                    <IconButton
                        color="primary"
                        aria-label="Prev"
                        disabled={index===0}
                        onClick={handlePrevButton}
                        >
                        <Icon fontSize="large">keyboard_arrow_left</Icon>
                    </IconButton>
                </Grid>
                <Grid item xs={10}>
                    <div className={classes.carousel}>
                        <img src={data[index]} className={classes.carouselImage} />
                        <div className={classes.carouselIndicator}>
                            {data.map((item, i) => <span className={i===index?classes.carouselIndicatorItemActive:classes.carouselIndicatorItem} onClick={()=>handleIndicatorClick(i)} key={i}></span>)}

                        </div>
                    </div>
                </Grid>
                <Grid item xs={1}>
                    <IconButton
                        color="primary"
                        aria-label="Next"
                        disabled={!(index<data.length-1)}
                        onClick={handleNextButton}
                    >
                        <Icon fontSize="large">keyboard_arrow_right</Icon>
                    </IconButton>

                </Grid>
            </Grid>
        </div>
    );
};

export default Carousel;