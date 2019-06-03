import React, { Component } from 'react';
import './Masque.css'
const HIDDEN_SYMBOL = '❓'
const Phrase =({phrase,feedback})=>( 
    <div className="ph">
            <div className={`${feedback}`}> 
              {feedback==='hidden' ? HIDDEN_SYMBOL: phrase}
            </div>
            <br/> <br/>
    </div>
 )
export default Phrase