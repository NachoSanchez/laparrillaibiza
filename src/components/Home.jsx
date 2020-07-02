import React, { useContext } from 'react';
import { ESP, ENG } from '../api';
import waves from '../assets/img/marea-simple.svg';
import { LanguageContext } from '../contexts/LanguageContext';
import styles from './Home.module.css';
import Carousel from './Carousel'

const Home = () => {
    const { english } = useContext(LanguageContext);
    const content = english ? ENG : ESP

    return (
        <main>
            <span className={ styles['img-wrapper'] }></span>
            <h1 className={ styles.title }>
                { content.lineOne }
                <br/>
                { content.lineTwo }
            </h1>
            <img className={ styles['wave'] } src={ waves } alt='...'/>
            <Carousel />
        </main>
    )
}

export default Home;