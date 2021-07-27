const sharedStyles = theme => ({
    viewRoot: {
        display: 'flex',
        '& > *': {
            [theme.breakpoints.down("xs")]: {
                margin: theme.spacing(0),
            },
            [theme.breakpoints.up("sm")]: {
                margin: theme.spacing(1),
            }
        },
    },

    nextButton: {
        margin: theme.spacing(3, 0, 2),
    },

    viewTitle: {
        width: "100%",
        textAlign: "center"
    },

    ellipsis: {
        width: "100%",
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    },

    alignCenter: {
        justifyContent: "center",
        display: "flex",
        padding: '10px',
        flexWrap: 'wrap'
    },

    bodyPadding: {
        padding: '10px',

        [theme.breakpoints.up("sm")]: {
            paddingLeft: '50px',
            paddingRight: '50px',
        }
    }
});

export default sharedStyles;