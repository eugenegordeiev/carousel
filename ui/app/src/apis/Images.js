import ApiClient, { networkError } from 'apis/ApiClient';

export const getImagesApi = async (data) => {

    return ApiClient.get(
        `/public/images/${data}`,
    ).then(response => {
        if(response?.data?.status === "success") {

            return {
                success: true,
                data: response.data.data
            };
        }

        else {
            return {
                success: false,
                msg: 'There was an issue with the service!'
            };
        }

    }).catch(error => networkError(error));
};