import React from 'react';
import { useState } from "react";
import DoctorSidebar from "./DoctorSidebar";
function DoctorUploadxray(){
   const [data,setData]=useState();
   console.log(data);
   function handleclick(e) {
      e.preventDefault();}
   return(<>
   <DoctorSidebar>
   <div className='uploadxray-main'>
   <h2 className="uploadxray-heading"> Upload X-Rays </h2>
   <div className="uploadxray-container">
      <ol className='instructions'>
         <h1>Instructions for uplaoding:</h1>
         <li>The file format must be JPEG or PNG.</li>
         <li>For best results, the photo must be of high quality.</li>
         <li>Please be patient after uploading the photo; processing the photo may take some time.</li>
      </ol>
      <div className="upload-button" ><h className='format'>*only jpeg, png format</h>
   <input id='imgs' type="file" className='input' accept="image/png, image/jpeg" style={{fontSize:25}}  onChange={(e)=>setData(e.target.files)} /></div>
   </div>
   <h2 className="download-heading"> Downlaod Report </h2>
   <div className="uploadxray-container">
      <ol className='instructions'>
         <h1>Instructions for downloading:</h1>
         <li>Select your downloading format. </li>
         <li>Document can be downloaded in JPEG,PNG and PDF format. </li>
         <li>Please check the quality of the results before leaving the page.</li>

      </ol>
      <div>
      <button className='download-button'type='download' onClick={handleclick}><h5 className='download'>Download</h5></button>
   </div>
   </div> </div> 
   </DoctorSidebar>
    
    </>
)}
 
export default DoctorUploadxray

