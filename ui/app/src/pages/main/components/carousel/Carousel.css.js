const styles = (theme) => {

    return {

        root: {
            flexGrow: 1,
            width: '100%',

        },

        grid: {
            height: '100%'
        },

        carousel: {
            textAlign: "center"
        },

        carouselImage: {
            maxWidth: '100%',
            maxHeight: 'calc(100vh - 100px)'
        },

        prevContainer: {
            textAlign: 'right'
        },

        carouselIndicator:  {
            alignItems: 'center',
            bottom: '0px',
            display: 'flex',
            flex: '1 1 auto',
            height: '2em',
            justifyContent: 'center',
            //position: 'absolute',
            width: '100%',
            zIndex: '2'
        },

        carouselIndicatorItem:  {
            backgroundColor: 'white',
            borderColor: 'lightgrey',
            borderStyle: 'solid',
            borderWidth: '2px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'block',
            height: '14px',
            margin: '3px',
            width: '14px'
        },

        carouselIndicatorItemActive: {
            backgroundColor: theme.palette.primary.main,
            borderColor: 'lightgrey',
            borderStyle: 'solid',
            borderWidth: '2px',
            borderRadius: '50%',
            display: 'block',
            cursor: 'auto',
            height: '14px',
            margin: '3px',
            width: '14px'
        }
    };

};

export default styles;