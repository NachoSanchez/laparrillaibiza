import React from 'react';
import { motion } from 'framer-motion';
import useTranslator from '../../hooks/useTranslator';
import Toggle from '../../components/Toggle';
import logo from '../../assets/img/logo.svg';
import left from '../../assets/img/marea-simple.svg';
import right from '../../assets/img/marea-large.svg';
import styles from '../Menu.module.css';



const MenuNav = (props) => {

    const eng = props.eng;
    const esp = props.esp;
    const title = useTranslator(eng, esp)

    return ( 
        <>
            <motion.nav 
                initial ={{ opacity: 0 }} animate ={{ opacity: 1 }} 
                transition ={{ duration : 1, delay : 1 }}
                className ={ styles['menu-nav'] }>
             <Toggle/>
            </motion.nav>

            <motion.img 
                initial ={{ opacity: 0 }} animate ={{ opacity: 1 }}
                transition ={{ duration: 1 }}
                src={ logo } alt='La Parrilla Bar & Grill'
                className ={ styles['menu-logo'] }
            />
            {/*  Ribetes celestes, decorativos */}
            <motion.img     
                initial ={{ x: -200, opacity: 0 }} animate ={{ x: 0, opacity: 1 }}
                transition ={{ duration : 1 }}
                src ={ left } alt ='decoration'
                className ={ styles['menu-detail__left'] }
            />

            <motion.img 
                initial ={{ x: 200, opacity: 0 }} animate ={{ x: 0, opacity: 1 }}
                transition ={{ duration : 1 }}
                src ={ right } alt ='decoration'
                className ={ styles['menu-detail__right'] }
            />

            <motion.h2
                initial ={{ y : 100, opacity : 0 }} animate ={{ y : 0, opacity : 1 }}
                transition ={{ duration : 1 }}
            > 
                { title }
            </motion.h2>
        </>
    );
}
 
export default MenuNav;