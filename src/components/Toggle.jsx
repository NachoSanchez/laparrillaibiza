import React, { useContext } from 'react';
import eng from '../assets/img/eng.png';
import esp from '../assets/img/esp.jpg';
import { LanguageContext } from '../contexts/LanguageContext';

const ToggleLanguage = () => {
    const {english, setLanguage } = useContext(LanguageContext);

    const css = {
        width: '25px',
        marginLeft: '6px'  
    }

    return (
        <a href='#'  onClick={
            ()=> ( setLanguage(!english))
        }>           
            { english ? 'ESP' : 'ENG'}
            <img 
                style={ css }
                src={ english ? esp : eng } 
                alt="Language toggle"
            />
        </a>
    )
}

export default ToggleLanguage;