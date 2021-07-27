import React from 'react';
import { getPath } from 'paths/Paths';
import { Link as RouterLink, useParams } from "react-router-dom";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Header = (props) => {
    let { imageType } = useParams();

    return (
        <ButtonGroup color="primary" variant="contained">
            <Button
                disabled={imageType==='sharks'?true:false}
                component={RouterLink}
                to={{pathname: getPath('carousel.imageType', 'sharks')}}
                >
                Sharks
            </Button>
            <Button
                disabled={imageType==='cats'?true:false}
                component={RouterLink}
                to={{pathname: getPath('carousel.imageType', 'cats')}}
                >
                Cats
            </Button>
        </ButtonGroup>
    );
};
export default Header;