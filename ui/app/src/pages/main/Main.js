import React, { useEffect, useState, useContext } from "react";
import { Carousel } from './index.js';
import { useParams } from "react-router-dom";
import { LoaderContext, ToastContext } from 'contexts';
import { getImagesApi } from 'apis/Images';
import { makeStyles } from '@material-ui/core/styles';
import { Header } from 'shared/components';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const Main = () => {

    // Check permissions
    const loader                           = useContext(LoaderContext);
    const classes                          = useStyles();
    let   { imageType } = useParams();
    const [images, setImages]      = useState(false);
    const toast  = useContext(ToastContext);

    useEffect(() => {
        loader.show();

        getImagesApi(imageType).then(response => {
            if(response.success && response.data){
                setImages(response.data);
            } else {
                toast.show(response.msg, 'error');
            }

            loader.hide();
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imageType]);


    return (
        <div className={classes.root}>
            <Header/>

            {images && (
                <Carousel data={images} />
            )}

            {!images && (
                <Typography variant="h5" color="error">No Data Available!</Typography>
            )}
        </div>
    );
};

export default Main;