import React from 'react';

function nav(){
    return(
        <div className="nav">
        <div className="logo">
          <h1>Harshad <span>Chavan</span></h1>
        </div>
       <div className="Home">
         <a href="#" className="Active">Home</a>
         <a href="#1">Skills</a>
         <a href="#2">Education</a>
         <a href="#3">Experiance</a>
         <a href="#4">Project</a>
         
       </div>
      </div>
    )
}
export default nav;