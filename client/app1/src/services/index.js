import axios from 'axios';

const url = window.location.host == "localhost:3000" ? "http://localhost:3001" : "";

const getFileNames = async () => {
    console.log("HIT");
	const route = url + "/get-mongo-data/file-names";
	return await axios({
        method: "GET", 
        url: route,
        crossDomain: true, 
    });
}

export { getFileNames };