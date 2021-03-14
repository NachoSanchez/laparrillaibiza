import React from 'react';
import Nav from './Menu/MenuNav';
import useTranslator from '../hooks/useTranslator';
import Accordion from './Menu/Acordion';
import { ENG, ESP } from '../api/breakfast';
import styles from './Menu.module.css';

const Breakfast = () => {
    const options =  useTranslator(ENG, ESP);
    console.log(options)
    return (
        <section className ={ 'grid-container '+ styles['menu']  }>
            <Nav eng ='Breakfast Options.' esp ='Carta de Desayuno.' />
            <div className ={ styles['menu-beverages'] }>
            {   options.map( option => (
                <Accordion key={ option.title } title={ option.title } options={ option.options } img={ null }/>
            ))} 
            </div>
        </section>
    );
}
 
export default Breakfast;
