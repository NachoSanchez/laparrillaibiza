import React, { useState } from 'react';
import useTranslator from '../hooks/useTranslator';
import logo from '../assets/img/logo.svg';
import wave from '../assets/img/marea-simple.svg';
import { ENG, ESP } from '../api';
import Nav from './Nav';
import Loader from './Loader'
import styles from './Home.module.css';

const Home = () => {
    const content = useTranslator(ENG, ESP);

    const [ loading, setLoading ] = useState(true);
    setTimeout(
      () => setLoading(false) ,2000
    )

    return loading 
    ? (
        <Loader />
    )
    : ( 
        <header className={'grid-container ' + styles['home']}>
            <img className={ styles['logo'] } src={ logo } alt='La Parrilla Bar & Grill'/>
            <div className={ styles['home-wrapper'] }></div>
            < Nav />
            <h1>
                { content.lineOne } <br/> { content.lineTwo }
            </h1>
            <img src={ wave } className={ styles['wave'] } alt='...'/> 
        </header>
     );
}
 
export default Home;