import React, { createContext, useState, useMemo, useEffect } from 'react';

export const LanguageContext = createContext();

const LanguageContextProvider = (props) => {

    const languageSetting = () => {
        if (localStorage.getItem('language')) {
            return JSON.parse(localStorage.getItem('language'));
        } else { 
            return false;
        }
    }
    const lang = languageSetting()

    const [ english, setLanguage ] = useState(lang);

    useEffect(
        () => {
            const userLanguage = JSON.stringify(english);
            localStorage.setItem('language', userLanguage);
        }
    , [ english ]);

    const providerVal = useMemo(
        () => ({ english, setLanguage }), [ english, setLanguage ]
    );

    return ( 
        <LanguageContext.Provider value={ providerVal }>
            { props.children }
        </LanguageContext.Provider>
    );
}
 
export default LanguageContextProvider;