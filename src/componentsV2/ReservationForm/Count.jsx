import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import { Label, CheckButton } from './Pieces';
import styles from './ReservationForm.module.css'

const Count = ( props ) => {
    const [ save, setSave ] = useState(false);
    const [ number, setNumber ] = useState(0);
    const max = 10;
    const min = 1;
    const add = () => setNumber( number +1 );
    const substract = () => setNumber( number -1 );

    useEffect(
        () => {
            //Cuando la variable save pase a true se guarda el valor
            save && props.setCount(number);       
        } , [ save , props, number ]
    )

    return (
        <> 
            {   props.count === null && (
            <div className ={ styles['input-count__wrapper'] }>
                <Label field ={ null} eng ={'table for :'} esp ={'Mesa para :'}/> 
                <div className ={ styles['input-count'] }>
                    <span 
                        onClick ={ number === min ? null : substract }
                        className ={ number === min ? styles['input-count__disabled'] : styles['input-count__able'] }
                    > - </span>
                    <h2>{ number }</h2>
                    <span 
                        onClick ={ number < max && add }
                        className ={ number === max ? styles['input-count__disabled'] : styles['input-count__able']}
                    > + </span>
                </div>
                {   number !== 0 && (
                    
                    <motion.div 
                        className ={ styles['input-count__nav'] }
                        initial ={{ y: 100, opacity: 0}}
                        animate ={{ y: 0, opacity: 1 }}
                        transition ={{duration: 0.2}}
                    >
                        <CheckButton onClick ={ () => setSave(!save) } />
                    </motion.div>
                    )
                }
            </div>
            )}

        </>
    )
}

export default Count;