import axios from 'axios';
import Env from 'environments/environment.js';

let headers = {
    'Content-Type': 'application/json',
};

const port = Env.settings.api.port !== 80 && Env.settings.api.port !== 443 ? `:${Env.settings.api.port}` : '';
export const serviceURL = `${Env.settings.api.protocol}://${Env.settings.api.host}${port}`;
export const resourcesURL = `${Env.settings.api.protocol}://${Env.settings.api.host}${port}/resources`;

const ApiClient = axios.create({
    baseURL: serviceURL,
    headers: headers,
    authRequired: false
});

export const networkError = (error) => {
    let errorMsg = 'There was an error with the network. Please check your connection and try again!';

    if(error?.response?.data?.message) {
        errorMsg = error.response.data.message;
    }

    return {
        success: false,
        msg: errorMsg
    };

};

export default ApiClient;