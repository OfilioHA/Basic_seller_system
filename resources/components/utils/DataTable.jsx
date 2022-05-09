
import axios from "axios"

export const useFetch = async (url, _loading, options) =>{
    let status = null;
    let response = null;
    let data = null;

    try {
        const crftoken = document.querySelector('meta[name="csrf-token"]').content;
        
        response = await axios.request({
            url: `/api/${url}`,
            headers: {
                "X-CSRF-TOKEN": crftoken,
            },
            ...options,
        });

        ({ data, status } = response);
    } catch (error) {
        console.log(error);
    } finally {
        _loading = false;
    }

    return {
        data,
        status,
        response,
    };
}
