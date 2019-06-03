import React, { Component } from 'react';

import  './Boutton.css'


const Boutton =({onClick,lettre,index}) => (
    
    <div className={`b1`} onClick={()=>onClick(lettre,index)}>
       <p>{lettre}</p> 
    </div>
  
)

export default Boutton;