import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { ENG, ESP } from '../api/menu';
import styles from './Carousel.module.css';


const Carousel = () => {
    const { english } = useContext(LanguageContext);
    const menu = english ? ENG : ESP;
    const h3 = english ? 'see our menu  ' : 'vea nuestro menú  ' ;
    return ( 
        <section className={ styles.carousel }>
            <h3> { h3 } <span> { '>>' } </span></h3>
            <div className={ styles['carousel-track'] }>
            {
                React.Children.toArray( menu.map( el => {
                    return <Item img={ el.img } title={ el.title } />
                }) )
            }
            </div>
        </section>
    );
}

const Item = (props) => {
    return ( 
        <a href='#menu' className={ styles['carousel-item'] }>
            <div 
                style={
                    { backgroundImage: `url('${props.img}' )` }
                }
            ></div>

            {/*
            Previous markup
            <img 
                src={ props.img } 
                alt={ `vea ${ props.title} en La Parrilla Bar & Grill` } 
            /> */}

            <div>
                <h4> { props.title } </h4>
            </div>
        </a>
    );
}
 

 
export default Carousel;