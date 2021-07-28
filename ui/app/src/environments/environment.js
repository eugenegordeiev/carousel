const Env = {
    production: false,
    env: 'local',

    settings: {
        api: {
            host: (process?.env?.REACT_APP_API_HOST)?process.env.REACT_APP_API_HOST:'localhost',
            protocol: (process?.env?.REACT_APP_API_PROTOCOL)?process.env.REACT_APP_API_PROTOCOL:'http',
            port: (process?.env?.REACT_APP_API_PORT)?process.env.REACT_APP_API_PORT:'8080'
        }
    }
};

export default Env;
