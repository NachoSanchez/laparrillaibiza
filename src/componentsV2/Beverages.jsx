import React from 'react';
import Nav from './Menu/MenuNav';
import useTranslator from '../hooks/useTranslator';
import Accordion from './Menu/Acordion';
import Banner from './Menu/Banner';
import img from '../assets/img/parrillada.jpg';
import { ENG, ESP } from '../api/wines';
import { beersENG, beersESP } from '../api/beers';
import { nonalcoholics } from '../api/drinks';
import styles from './Menu.module.css';

const Beverages = () => {
    const title = useTranslator('Hungry? see our menu.', '¿hambre? vea nuestra carta.' );
    const button = useTranslator('go to menu', 'ver la carta');
    const redirect ='/menu'

    const wines =  useTranslator(ENG , ESP)
    const beers =  useTranslator(beersENG , beersESP)
    const nonAlcoholicsTitle = useTranslator( nonalcoholics.titleEng, nonalcoholics.titleEsp ) 
    
    return (
        <section className ={ 'grid-container '+ styles['menu']  }>
            <Nav eng ='Our Beverages.' esp ='Carta de Bebidas.' />
            
            <sidebar className ={ styles['drinks-banner'] }>
            </sidebar>

            <div className ={ styles['menu-beverages'] }>
                <Accordion 
                        title={ nonAlcoholicsTitle }
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
                <Banner 
                    img ={ img } title ={ title }
                    redirect ={ redirect } button ={ button }
                />
            </div>
        </section>
    );
}
 
export default Beverages;
