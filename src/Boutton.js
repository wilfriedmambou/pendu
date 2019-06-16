import React, { Component } from 'react';

import  './Boutton.css'


const Boutton =({onClick,lettre,index,feedbackMatch,feedbackUnMatch}) => (
    
    <div className={`b1`} onClick={()=>onClick(lettre,index)}> 
          {feedbackMatch.includes(lettre.toUpperCase()) ||feedbackUnMatch.includes(lettre.toUpperCase())  ? <p className="red">{lettre}</p> : <p>{lettre}</p>}
    </div>
  
)

export default Boutton;