import React from 'react';
import './style.css';
import gif from  '../../assets/loading.gif';

export default function Loading({is, children}){
    if(!is) return null;
    return <div className="loading">
        <img src={gif}/>
        {children}
    </div>
}
