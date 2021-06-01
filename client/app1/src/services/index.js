import axios from 'axios';

const url = window.location.host === "localhost:3000" ? "http://localhost:3001" : "";

const getFileNames = async () => {
	const route = url + "/get-mongo-data/file-names";
	return await axios({
        method: "GET", 
        url: route,
        crossDomain: true,
    });
}

const downloadFile  = async (fileName) => {
    const route = `${url}/get-mongo-data/download-file?fileName=${fileName}`;
    return await axios({
        method: "GET", 
        url: route,
        crossDomain: true,
        data: {
            fileName,
        }
    });
}

export { 
    getFileNames,
    downloadFile,
};