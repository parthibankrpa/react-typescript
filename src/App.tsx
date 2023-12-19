import React, { useState} from 'react';
import { Clock } from './Clock';
import './style.css';

export const App = () => {
    const [flag,setFlag] = useState(false);
    async function loadMyModule() {
        setFlag(!flag);
        const { default: defaultFunc } = await import('./admin.js');
        // defaultFunc('b', 'c'); // => 'bc'
        console.log( defaultFunc(flag, 'c'));
      }
    return <>
      <h1  onClick={loadMyModule}> react typescript app</h1>
      <Clock time={"asdfasdf"}/>
    </> 
}