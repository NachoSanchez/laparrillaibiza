import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
            <motion.img 
                initial ={{y: 100, opacity : 0}}
                animate ={{y: 0, opacity: 1}}
                transition ={{ duration: .5 }}
                className={ styles['logo'] } src={ logo } alt='La Parrilla Bar & Grill'
            />

            <motion.div 
                initial ={{ opacity: 0, rotateZ: 18 }}
                animate ={{ opacity: 1, rotateZ: 7 }}
                transition ={{ duration : 2 }}
                className={ styles['home-wrapper'] }
            ></motion.div>
            <Nav />
            <motion.h1
                initial ={{ y: 100, opacity: 0 }}
                animate ={{ y: 0, opacity: 1 }}
                transition ={{ duration : 1 }}
            >
                { content.lineOne } <br/> { content.lineTwo }
            </motion.h1>

            <motion.img 
                initial ={{ x: -200, opacity: 0 }}
                animate ={{ x: 0, opacity: 1 }}
                transition ={{ duration : 2 }}
                src={ wave } className={ styles['wave'] } alt='...'/> 
        </header>
     );
}
 
export default Home;