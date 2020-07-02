import React, { useState } from 'react';
import AllergenicIcon from './AllergenicIcon';
import styles from './Menu.module.css';

const Accordion = (props) => {
    const [ isShowing, setShow ] = useState(false);
    const options = props.options;
    const height = isShowing ? { height: 'auto'} : { height: '0px'}
    const toggle = isShowing ? { transform: 'rotate(45deg)' } : { transform: 'rotate(90deg)' }

    return ( 
        <article className={ styles['menu-accordion'] }>
            <div 
                style={{ backgroundImage: `url('${props.img}')`}}
                onClick={ ()=> ( setShow(!isShowing) ) }
            >
                <h2> { props.title } </h2>
                { /** Toggle button */ }
                <span className={ styles['toggle-btn'] } style={ toggle }>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115 115">
                        <path className="cls-1" d="M125.5,68a12,12,0,0,1-12,12H80v33.5a12,12,0,0,1-24,0V80H22.5a12,12,0,0,1,0-24H56V22.5a12,12,0,0,1,24,0V56h33.5A12,12,0,0,1,125.5,68Z" transform="translate(-10.5 -10.5)"/>
                    </svg>
                </span>
            </div>
            <ul style={ height }>
                {React.Children.toArray( options.map(
                    option => (
                        <li>
                            <div className={ styles['name-allergenics'] } >
                                <h3> { option.name } </h3>
                                <span>
                                {   option.allergenics.map(
                                        (el) => < AllergenicIcon type={ el }  />
                                    )}
                                </span>
                            </div>
                            <div className={ styles['price-desc'] }>
                                <p> { option.desc } </p>
                                <h4> <small> € </small> { option.price } </h4>
                            </div>
                        </li>
                )))}
            </ul>
        </article>
    );
}
 
export default Accordion;