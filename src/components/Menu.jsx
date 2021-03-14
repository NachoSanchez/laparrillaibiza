import React, { useContext } from 'react';
import logo from '../assets/img/logo.svg';
import waveRight from '../assets/img/marea-large.svg';
import waveLeft from '../assets/img/marea-simple.svg';
//import special from '../assets/img/parrillada.jpg';
import { ENG, ESP } from '../api/menu';
import { LanguageContext } from '../contexts/LanguageContext';
import styles from './Menu.module.css';
import Accordion from './Accordion';

const Menu = () => {
    const { english } = useContext(LanguageContext);
    const title = english ? 'Our Menu.' : 'Nuestro Menu.'
    const menu = english ? ENG : ESP;
    
    return ( 
        <section id='menu' className='grid-container'>
            <img src={ waveLeft } className={ styles['wave-left'] } alt="..."/>
            <img src={ waveRight } className={ styles['wave-right'] } alt="..."/>
            <div>
                <img src={ logo } alt='La Parrilla Bar & Grill' />
                <h2> { title } </h2>
            </div>
            <sidebar className={ styles['special'] }>
                <div>
                    <h3> { menu[2].body } </h3>
                </div>
            </sidebar>
            <aside>
            
                <Accordion title={ menu[2].title } options={ menu[2].options } img={ menu[2].img } />
                <Accordion title={ menu[0].title } options={ menu[0].options } img={ menu[0].img } />
                <Accordion title={ menu[1].title } options={ menu[1].options } img={ menu[1].img } />
                <Accordion title={ menu[5].title } options={ menu[5].options } img={ menu[5].img } />
                <Accordion title={ menu[4].title } options={ menu[4].options } img={ menu[4].img } />
                <Accordion title={ menu[3].title } options={ menu[3].options } img={ menu[3].img } />
                <Accordion title={ menu[6].title } options={ menu[6].options } img={ menu[6].img } />
           
            </aside>
        </section> 
    );
}
 
export default Menu;