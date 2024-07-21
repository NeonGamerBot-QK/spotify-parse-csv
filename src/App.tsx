import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import BeforeUpload from './components/File';
// import Data from './components/Data';
import DataC from './components/Data';
type Data = string[];
function App() {
  const [data,setData] = useState<null | Data[]>(null)
  if(!data) return <BeforeUpload setData={setData} />
  if(data) return <DataC data={data} />
return null;
}

export default App;
