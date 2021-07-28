import React, { useEffect, useState } from 'react';
import { getPath } from 'paths/Paths';
import { useParams, useHistory } from "react-router-dom";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const Header = (props) => {
    let { imageType } = useParams();
    const [imageTypeSelection, setImageTypeSelection] = useState(() => imageType === 'all'?['sharks', 'cats']:imageType);
    const history = useHistory();

    const handleImageTypeChange = (event, newImageType) => {
        setImageTypeSelection(newImageType);
    };

    useEffect(() => {

        console.log('imageTypeSelection',imageTypeSelection);
        // Update the URL
        if(imageTypeSelection.length === 1){
            history.push({pathname: getPath('carousel.imageType', imageTypeSelection[0])});
        }
        else if(imageTypeSelection.length > 1) {
            history.push({pathname: getPath('carousel.imageType', 'all')});
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imageTypeSelection]);



    return (
        <ToggleButtonGroup value={imageTypeSelection} onChange={handleImageTypeChange}>
            <ToggleButton value="sharks" aria-label="sharks">
                Sharks
            </ToggleButton>
            <ToggleButton value="cats" aria-label="cats">
                Cats
            </ToggleButton>
        </ToggleButtonGroup>
    );
};
export default Header;