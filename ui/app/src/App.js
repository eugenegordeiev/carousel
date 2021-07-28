import React from 'react';

import { ScrollToTop } from 'shared/components';
import { LoaderProvider, ToastProvider } from 'contexts';
import { SnackbarProvider } from 'notistack';
import Routes from 'Routes.js';

export default function App() {
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

