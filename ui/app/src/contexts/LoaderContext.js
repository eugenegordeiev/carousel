import React, { createContext, useState, useMemo } from 'react';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const LoaderContext = createContext();

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff'
    },
}));

const LoaderProvider = (props) => {
    const classes = useStyles();
    const [visible, setVisible] = useState(false);

    const spinner = useMemo(() => ({
        show: () => setVisible(true),
        hide: () => setVisible(false),
    }), []);

    return (
        <>
            {visible && (
                 <Backdrop className={classes.backdrop} open={visible}> 
                    <CircularProgress color="inherit" />
                </Backdrop>
            )}
            <LoaderContext.Provider value={spinner}>
                {props.children}
            </LoaderContext.Provider>
        </>
    );
};

export { LoaderProvider };
export default LoaderContext;