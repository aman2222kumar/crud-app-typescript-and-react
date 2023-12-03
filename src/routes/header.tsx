import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import App from '../App';
import ToRead from '../routes/toRead';

// interface newProps{
//     count:number,
// }

function Header():JSX.Element{
   
    return(
        <>
        <header>
        <div id="header_container">
         <div className='header_container'>
            <h1>Book World</h1>
            <ul>
                <li>
                   <Link to={'https://aman2222kumar.github.io/crud-app-typescript-and-react/'} className='Link_prop'>Home</Link> 
                </li>
                <li>
                   
                <Link to={'/routes/toRead'} className='Link_prop'>
                    To Read
                 </Link>
                </li>
                <li>
                <Link to={'/routes/toReadCompleted'} className='Link_prop'>
                    Read Completed</Link>
                </li>
                <li>
                    
                </li>
            </ul>
         </div>
        </div>

    
        </header>
        </>
    )
}

export default Header;