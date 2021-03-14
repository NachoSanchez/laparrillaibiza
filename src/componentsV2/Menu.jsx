import React from 'react';
import { motion } from 'framer-motion';
import useTranslator from '../hooks/useTranslator';
import Accordion from './Menu/Acordion';
import MenuNav from './Menu/MenuNav';
import Banner from './Menu/Banner';
import { ENG, ESP } from '../api/menu';
import img from '../assets/img/gallery-2.png'
import Special from './Menu/Special';
import styles from './Menu.module.css';

const Menu = ({ match }) => {
    const title = useTranslator('See our Beverage options', 'Vea nuestra carta de bebidas.' );
    const button = useTranslator('go to drinks', 'Ir a bebidas');
    const redirect ='/drinks';
    console.log(match)
    const menu = useTranslator( ENG, ESP );

    return (
        <section id='menu' className ={'grid-container '+ styles['menu'] }>
            {
                match && <MenuNav eng ='Our Menu.' esp ='Nuestro Menu.' />
            }
            
            <Special/>

            <motion.aside 
                initial ={{ x : 200, opacity : 0 }} animate ={{ x : 0, opacity : 1 }}
                transition ={{ duration : 1}}
                className ={ styles['menu-active'] }
            >
                <Accordion title={ menu[0].title } options={ menu[0].options } img={ menu[0].img } />
                <Accordion title={ menu[1].title } options={ menu[1].options } img={ menu[1].img } />
                <Accordion title={ menu[5].title } options={ menu[5].options } img={ menu[5].img } />
                <Accordion title={ menu[4].title } options={ menu[4].options } img={ menu[4].img } />
                <Accordion title={ menu[3].title } options={ menu[3].options } img={ menu[3].img } />
                <Accordion title={ menu[6].title } options={ menu[6].options } img={ menu[6].img } />
            
                <Banner 
                    img ={ img } title ={ title }
                    redirect ={ redirect } button ={ button }
                />
            
            </motion.aside>

        </section>
    );
}
 
export default Menu;
