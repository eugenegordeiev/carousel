import React, { useContext} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
//import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import Icon from '@material-ui/core/Icon';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { AuthenticationContext } from 'contexts';
//import { capetalize } from "../../utils";
import { getPath } from 'paths/Paths';
import useMediaQuery from '@material-ui/core/useMediaQuery';
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