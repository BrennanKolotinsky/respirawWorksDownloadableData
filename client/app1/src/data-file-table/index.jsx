import React, { Component, useEffect, useState } from 'react';
import { getFileNames } from '../services/index.js';


const DataFileTable = (props) => {

  const[loadedFileNames, setLoadedFileNames] = useState(false);
  
  useEffect(async () => {
    const files = await getFileNames();
    console.log(files);
  });

  
  
  return (
    <div>Here</div>


  );

}

export default DataFileTable;