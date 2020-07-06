import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import eng from '../assets/img/eng.png';
import esp from '../assets/img/esp.jpg';

const Nav = () => {
    const {english, setLanguage } = useContext(LanguageContext);

    const ImgCss = {
        width: '25px',
        marginLeft: '6px'
    }

    return ( 
        <nav className='nav'>
            <span 
                id='Toggle'
                onClick={
                ()=> ( setLanguage(!english))
            }>           
                { english ? 'ESP' : 'ENG'}
                <img 
                    style={ ImgCss }
                    src={ english ? esp : eng } 
                    alt="Language toggle"
                />
            </span>        
        </nav>
    );
}
 
export default Nav;