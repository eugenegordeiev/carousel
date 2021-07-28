import React, { createContext, useMemo } from 'react';

import { useSnackbar } from 'notistack';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const ToastContext = createContext();

const ToastProvider = (props) => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const action = key => (
        <IconButton
            onClick={() => { closeSnackbar(key) }}
        >
            <CloseIcon />
        </IconButton>
    );

    const toast = useMemo(() => ({
        show: (msg, type='success') => enqueueSnackbar(msg, {
            variant: type,
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'center'
            },
            action
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }), []);

    /*
    const toast = {
        show: (msg, type='success') => enqueueSnackbar(msg, {
            variant: type,
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'center'
            }
        })
    };
*/
    return (
        <>
            <ToastContext.Provider value={toast}>
                {props.children}
            </ToastContext.Provider>
        </>
    );


};

export { ToastProvider };
export default ToastContext;