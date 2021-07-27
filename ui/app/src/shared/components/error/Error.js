import React from "react";

import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

const Error = ({msg="Page Not Found!"}) => {
    const classes = useStyles();

    return (

        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Typography color="secondary" component="h1" variant="h1">
                    Oops
                </Typography>
                <Typography color="primary" component="h1" variant="h5">
                    {msg}
                </Typography>
            </div>
        </Container>

    );

};

export default Error;