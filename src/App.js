import React, { useState } from 'react'
import Select from 'react-select'

import Dropzone from 'react-dropzone-uploader'

import './App.css';
import 'react-dropzone-uploader/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [getprotocol, setGetprotocol] = useState(null);
  const [ip, setIp] = useState(null);
  const [port, setPort] = useState(null)

  const options = [
    { value: 'http', label: 'http' },
    { value: 'https', label: 'https' },
  ]
  
  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => { return { url: `${getprotocol}://${ip}:${port}/single` } }
  
  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
  
  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  const getUploadParamsMultiple = ({ meta }) => { return { url: `${getprotocol}://${ip}:${port}/multiple` } }
  
  // called every time a file's `status` changes
  const handleChangeStatusMultiple = ({ meta, file }, status) => { console.log(status, meta, file) }
  
  // receives array of files that are done uploading when submit button is clicked
  const handleSubmitMultiple = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  const handleChangeProtocol = (e) => {
    setGetprotocol(e.value)
  }

  const handleChangeIp = (e) => {
    setIp(e.target.value);
  }


  const handleChangePort = (e) => {
    setPort(e.target.value);
  }

  return (
    <div className="App">
      <div className = "row" style = {{marginTop: '50px', width: '70%', paddingLeft: '20px'}}>
        <div className = "col-3">
        <Select
             
             placeholder="protocol"
             options={options}
             onChange={handleChangeProtocol}
             
         />
         </div>
         <div className = "col-3">
         <input type="text" className="form-control my-n1" placeholder="192.168.0.1" onChange = {(e) => {handleChangeIp(e)}}/>
         </div>
         <div className = "col-3">
         <input type="text" className="form-control my-n1" placeholder="8000" onChange = {(e) => {handleChangePort(e)}}/>
         </div>
         
         
          </div>
      <header className="App-header">
        
      <div className="row" style = {{ width: '80%', display: 'flex', justifyContent: 'space-between'}}>
        <div className = "col-6" style = {{border: '1px solid black', marginLeft: '-10px'}}>
        <h2 className = "text-black">Upload Single Files</h2>
      <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept="image/*,audio/*,video/*"
    />
    </div>
    <div className = "col-6" style = {{border: '1px solid black', marginRight: '-10px'}}>
      <h2 className = "text-black">Upload Multiple Files</h2>
      <Dropzone
      getUploadParams={getUploadParamsMultiple}
      onChangeStatus={handleChangeStatusMultiple}
      onSubmit={handleSubmitMultiple}
      accept="image/*,audio/*,video/*"
    />
    </div>
    </div>
      </header>
    </div>
  );
}

export default App;
