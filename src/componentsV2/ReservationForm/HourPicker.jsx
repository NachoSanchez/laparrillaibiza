import React, { useState, useEffect } from 'react';
import styles from './HourPicker.module.css';
import { months } from '../../helpers/Calendar';
import useTranslator from '../../hooks/useTranslator'; 
import { NextButton } from './Pieces';

const HourPicker = ( props ) => {
    const [ hour, setHour ] = useState({ hour: null, minutes: null });
    const minutes = hour.minutes ? hour.minutes : '00';
    //seteando horarios turno mediodia y noche
    const dayService = [12, 13, 14, 15 ];
    const nightService = [20, 21, 22, 23 ];

    const add15Min = (e) => {
        e.preventDefault();
        if ( hour.minutes < 45){
            setHour({ ...hour, minutes : hour.minutes + 15 })
        }
    }

    const addHour = (e) => {
        e.preventDefault()
        if( hour.hour >= 12 & hour.hour < 15 || hour.hour >= 20 & hour.hour < 23 ) {
            setHour({ hour : hour.hour + 1, minutes : null })
        }
    }

    const dateEng = `${ months[props.date.month].eng } ${ props.date.date }`;
    const dateEsp = `${ props.date.date} de ${ months[props.date.month].esp }`;

    const selectedDate = useTranslator( dateEng, dateEsp );

    /**
     * In the useEffect hook we use the setState of a useState called in parent component
     * this violates or hack the rules of hooks (?)
     */
    useEffect(
        () => props.setHour( hour ), [hour, props]
    )

    return (
        <>
            <div className ={ styles['hp-date'] }> { selectedDate } </div>
        {   hour.hour === null ? (
            <>
                <ul className ={ styles['hp-table'] }>
                {
                    dayService.map(
                        time => (
                            <li key ={ time } onClick ={ () => setHour({minutes: 0, hour: time}) }>
                                { time + ': 00' }
                            </li>
                        )
                    )
                }
                </ul>
                <ul className ={ styles['hp-table']}>
                {
                    nightService.map(
                        time => (
                            <li key={ time } onClick ={ () => setHour({ minutes: 0, hour: time }) }>
                                { time + ': 00' }
                            </li>
                        )
                    )
                }
                </ul>
            </>
        ) : (
            <div className ={ styles['hp-hour'] }>
                <h4>{ hour.hour + ': '+ minutes }</h4>
                {
                    hour.hour !== null &&
                    <small onClick={ hour.minutes < 45 ? add15Min : addHour }>
                        + 15 min.
                    </small>
                }
                <NextButton eng ={ 'next step' } esp ={ 'Siguiente' } handleClick ={ props.handleClick }/>
            </div>
    )}
    </>
    )
}
 
export default HourPicker;