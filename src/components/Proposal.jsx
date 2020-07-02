import React, { useContext } from 'react';
import cocktail from '../assets/img/mojito.png';
import wave from '../assets/img/marea-large.svg';
import { ENG, ESP } from '../api';
import { LanguageContext } from '../contexts/LanguageContext';
import styles from './Proposal.module.css';
import Reviews from './Reviews'

const Proposal = () => {
    const { english } = useContext(LanguageContext);
    const content = english ? ENG.proposal : ESP.proposal;

    return ( 
        <section id='proposal'  className={ styles.proposal }>
            
            <img 
                className={ styles['proposal-img'] }
                src={ cocktail } 
                alt="Cocktails en La Parrilla Bar & Grill"/>
            <aside>
                <h2> { content.title } </h2>
                <p> { content.text } </p>
                <a 
                    href='#where'
                    className={ styles['btn-ghost'] }
                >
                { english ? 'Find us!' : 'Encuentranos!' }
                </a>
            </aside>
            <Reviews />
            <img 
                className={ styles.wave }
                src={ wave } 
                alt='...'
            />                
        </section>
     );
}
 
export default Proposal;