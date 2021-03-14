import React, { useState } from 'react';
import {  motion } from 'framer-motion';
import wave from '../../assets/img/marea-simple.svg'
import { ENG, ESP } from '../../api/menu';
import useTranslator from '../../hooks/useTranslator';
import styles from './Special.module.css';
import AllergenicIcon from './AllergenicIcon';

const Special = () => {
    const [ isShowing, setShowing ] = useState(null);
    /*const alt = useTranslator(
        'A la brasa specials at La Parrilla Bar & Grill',
        'Especiales a la brasa en La Parrilla Bar & Grill'
    ); */
    const content = useTranslator(ENG[2], ESP[2]);
    const btn = useTranslator('see options', 'ver opciones')

    return (
        <motion.article 
            initial ={{y : 100, opacity: 0}}
            animate ={{y : 0, opacity: 1}}
            transition ={{ duration : 1 }}
            className ={ styles['special']}
            >
            <div 
                className ={ styles['special-wrap'] }
                style ={{ backgroundImage : `url(${ content.img })` }}
                onClick ={ () => setShowing( true ) }
            >
            </div>
            <motion.div 
                initial ={{ x: -400, opacity: 0 }}
                animate ={{ x: 0, opacity: 1 }}
                transition ={{  duration : 1 }}
                onClick ={ ()=> setShowing(true) }
                className ={ styles['special-body'] }>
                <h2> { content.title }. </h2>
                <p>
                    { content.body }
                </p>
                <span> {btn} </span>
                <img src={wave} alt='..'/>
            </motion.div>

            {   // The following code will only be rendered when someone tap
                // on the above div
                isShowing && (
                //backdrop
                <motion.div
                    initial ={{opacity: 0}} animate ={{opacity: 1}}
                    transition ={{ duration: .5 }}
                    className ={ styles['backdrop'] }
                >
                { /** Content */ }
                <div className ={ styles['list-wrapper'] }>
                    <div className ={ styles['list-header'] }>
                        <span
                            onClick ={ () => setShowing( false )  } 
                            className ={ styles['close-btn'] }
                        >
                            <svg viewBox="0 0 115 115">
                                <path d="M125.5,68a12,12,0,0,1-12,12H80v33.5a12,12,0,0,1-24,0V80H22.5a12,12,0,0,1,0-24H56V22.5a12,12,0,0,1,24,0V56h33.5A12,12,0,0,1,125.5,68Z" transform="translate(-10.5 -10.5)"/>
                            </svg>
                        </span>
                    </div>
                    <ul>

                    { React.Children.toArray(
                        content.options.map(
                            option => 
                            <li className ={ styles['list-item'] }>                             
                                <div >
                                    <h3> { option.name } </h3>
                                    <span>
                                    {   option.allergenics.map(
                                            (el) => < AllergenicIcon type={ el }  />
                                        )}
                                    </span>
                                </div>
                                <div>
                                    <p> { option.desc } </p>
                                    <h4> <small> € </small> { option.price } </h4>
                                </div>
                            </li>
                        ))}

                    </ul>
                </div>

                </motion.div>
            )}
        </motion.article>
    );
}
 
export default Special
