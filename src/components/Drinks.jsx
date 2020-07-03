import React, { useContext } from 'react';
import logo from '../assets/img/logo.svg';
import waveRight from '../assets/img/marea-large.svg';
import waveLeft from '../assets/img/marea-simple.svg';
import { ENG, ESP } from '../api/wines';
import { beersENG, beersESP } from '../api/beers';
import { nonalcoholics } from '../api/drinks';
import { LanguageContext } from '../contexts/LanguageContext';
import styles from './Menu.module.css';
import Accordion from './Accordion';

const Drinks = () => {
    const { english } = useContext(LanguageContext);
    const title = english ? 'Our Beverages.' : 'Nuestras Bebidas.'
    const wines = english ? ENG : ESP;
    const beers = english ? beersENG : beersESP
    
    return ( 
        <section id='menu' className={ styles['menu-section'] }>
            <img src={ waveLeft } className={ styles['wave-left'] } alt="..."/>
            <img src={ waveRight } className={ styles['wave-right'] } alt="..."/>
            <div>
                <img src={ logo } alt='La Parrilla Bar & Grill' />
                <h2> { title } </h2>
            </div>
            <sidebar className={ styles['special'] }>

            </sidebar>
            <aside>

                <Accordion 
                    title={ english ? nonalcoholics.titleEng : nonalcoholics.titleEsp }
                    options={ nonalcoholics.options }
                    img={ null }
                />
                
            { beers.map(
                (beer, index) => (
                    <Accordion key={ index } title={ beer.title } options={ beer.options } img={ null } />
                )
            )}
            { wines.map(
                (wine, index) => (
                    <Accordion key={ index } title={ wine.title } options={ wine.options } img={ null } />
                )
            )}
            </aside>
        </section> 
    );
}
 
export default Drinks;