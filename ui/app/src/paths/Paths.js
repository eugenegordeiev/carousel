import {format} from 'react-string-format';

const paths = {
    carousel: {
        imageType: "/carousel/{0}",

    }
};

export const getPath = (path, ...args) => {
    let value = path.split('.').reduce((o, i) => o[i], paths);
    if(value !== undefined){
        return format(value, ...args).replace(/\{\d\}/g,'');
    }
    return false;
};