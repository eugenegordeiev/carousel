import React, { useEffect, useState, useContext } from "react";
import { Carousel } from './index.js';
import { useParams, useHistory } from "react-router-dom";
import { LoaderContext, ToastContext } from 'contexts';
import { getImagesApi } from 'apis/Images';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Error, Header } from 'shared/components';
import Typography from '@material-ui/core/Typography';


const setObject = (obj, path, val) => {
    const keys = path.split('.');
    const lastKey = keys.pop();
    const lastObj = keys.reduce((obj, key) =>
            obj[key] = obj[key] || {},
        obj);
    lastObj[lastKey] = val;
};

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
            console.log(response.data);

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