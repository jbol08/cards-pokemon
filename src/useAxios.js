import { useState } from 'react';
import axios from "axios";
import uuid from "uuid";

const useAxios = (baseUrl) => {
	const [ responses, setResponses ] = useState([]);

	const addData = async (restOfUrl = '') => {
		const resp = await axios.get(`${baseUrl}${restOfUrl}`);
		setResponses((response) => [ ...response, { ...resp.data, id: uuid() } ]);
	};

    return [ responses, addData ];
};

  

export {  useAxios };