import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import { ScrollToTop } from 'shared/components';
import { LoaderProvider, ToastProvider } from 'contexts';
import { SnackbarProvider } from 'notistack';
import Routes from 'Routes.js';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            [theme.breakpoints.down("xs")]: {
                margin: theme.spacing(0),
            },
            [theme.breakpoints.up("sm")]: {
                margin: theme.spacing(1),
            }
        },
    }
}));

export default function App() {
    const classes = useStyles();

    let location = useLocation();


    return (
        <SnackbarProvider maxSnack={3}>
                <LoaderProvider>
                    <ToastProvider>
                        <ScrollToTop/>
                            <Routes/>
                    </ToastProvider>
                </LoaderProvider>
        </SnackbarProvider>

    );
}

