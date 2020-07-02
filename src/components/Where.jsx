import React, { useContext } from 'react';
import { ENG, ESP } from '../api';
//import credentials from '../api/credentials'
import { LanguageContext } from '../contexts/LanguageContext';
//import Map from './Map.jsx'
import styles from './Where.module.css'


const Where = () => {
    const { english } = useContext(LanguageContext);
    const content = english ? ENG.where : ESP.where

    return ( 
        <section id='where' className={ styles.where }>
            <article>
                <h2> { content.title }</h2>
                <p> { content.text } </p>
            </article>
            
 {/*            <Map
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${ credentials.mapsKey}`}
                containerElement= {<div/>}
                mapElement={ <div styles={{ height: '100%' }}/> }
                loadingElement={ <p>Cargando...</p> }
            /> */}

        </section>
     );
}
 
export default Where;