import React, { useContext } from 'react';
import eng from '../assets/img/eng.png';
import esp from '../assets/img/esp.jpg';
import { LanguageContext } from '../contexts/LanguageContext';

const ToggleLanguage = () => {
    const {english, setLanguage } = useContext(LanguageContext);
/* 
    const cssA ={
        color: 'white',
        fontWeight: 'bold',
        justifySelf: 'end'
    };
 */
    const cssImg = {
        width: '25px',
        marginLeft: '6px'
    };

    const handleClik = (e) => {
        e.preventDefault();
        setLanguage(!english)
    };

    return (
        <a href='/'  onClick={ handleClik }>           
            { english ? 'ESP' : 'ENG'}
            <img 
                style={ cssImg }
                src={ english ? esp : eng } 
                alt="Language toggle"
            />
        </a>
    )
}

export default ToggleLanguage;