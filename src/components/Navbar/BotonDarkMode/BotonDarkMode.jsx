import React from 'react';
import './botonDarkMode.css'
import { useDarkmodeContext } from '../../../context/DarkModeContext';

export const BotonDarkMode = () => {
    const {toggleDarkMode} = useDarkmodeContext()

    
    return (
        <div className="theme-switch-wrapper">
            <label className="theme-switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" onInput=
                {() => toggleDarkMode()}/>
                <div className="slider round"/>
            </label>
            
        </div>
    );
}


