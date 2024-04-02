import axios from "axios";

export const postRequest = async (url, body) => {
    try {
        const api = "/api/" + url;
        const response = await axios.post(api, body, {
            headers: {
            // Add your headers here
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token"),
            }
        });

        const data = await response.json();

        // Failed
        if(response.statusCode !== 0 ){
            let message;

            if(data?.message){
                message = data.message;
            } else {
                message = "An error occurred";
            }

            return {statusCode: response.statusCode, message, error: true};
        }
    }
    catch (e) {
        return {statusCode: 500, message: e.message, error: true};
    }
}