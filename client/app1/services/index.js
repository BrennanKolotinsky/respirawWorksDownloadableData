import axios from 'axios';

const url = window.location.host == "localhost:3000" ? "http://localhost:8080" : "";

const getFileNames = async () => {
	const route = url + "/checkPatientByEmail";
	return await axios({
        method: "POST", 
        url: route,
        crossDomain: true, 
    });
}

export { getPatientByEmail };