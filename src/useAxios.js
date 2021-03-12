import { useState } from 'react';
import axios from "axios";

const useAxios = (baseUrl) => {
    const [responses, setResponses] = useState()
    const addResponseData = async (formatter = data => data, restOfUrl = "") => {
        const response = await axios.get(`${baseUrl}${restOfUrl}`);
        setResponses(data => [...data, formatter(response.data)]);
    };

    

    return [responses, addResponseData];
}

export { useAxios };