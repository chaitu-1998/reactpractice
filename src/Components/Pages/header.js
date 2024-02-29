import React, { useState } from 'react';
import "../Style/header.css";
import { Link } from 'react-router-dom';
import NavigationIcon from '@mui/icons-material/Reorder';

export default function Headers()
{
    const [showHiddenBar,setshowHiddenBar]=useState(false);
    const showBar = ()=>{
        setshowHiddenBar(!showHiddenBar);
    }
    return(
        <div className='Header'>
            <div className='LeftHeader'>
                <h1>Chaitanya Vidudhala</h1>
            </div>
            <div className='Navigation'>
                <Link>About Me</Link>
                <Link>Projects</Link>
                <Link>Skills</Link>
                <Link>Contact</Link>
            </div>
            <div className='RightHeader'>
                <button aria-placeholder='Hire'>Hire</button>
            </div>
        </div>
    );
}