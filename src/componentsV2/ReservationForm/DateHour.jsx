import React from 'react';
import useTranslator from '../../hooks/useTranslator';
import { months } from '../../helpers/Calendar';
import { MailIcon, PhoneIcon } from './Pieces';
import styles from './ReservationForm.module.css';

const DateHour = ( props ) => {
    const minutes = props.minutes === 0 ? '00': props.minutes;

    const dayTermination = ( num ) => {
        switch ( num ) {
            case 1:
                return 'st.'
            case 2:
                return 'rd.'
            default:
                return 'th.';
        }
    }

    //Setting content by languages
    const firstEng = `Next ${ months[props.month].eng } ${ props.date } ${ dayTermination(props.date) } at ${props.hour}: ${minutes} hs.`;
    const firstEsp = `Próximo ${ props.date } de ${ months[props.month].esp } a las ${props.hour}: ${minutes} hs.`;
    const secondEng = ` Table for ${ props.count },`;
    const secondEsp = ` Mesa para ${ props.count },`;
    const thirdEng = ` in the name of ${ props.contact.name }`;
    const thirdEsp = ` a nombre de ${ props.contact.name }`
    
    //Translations
    const title = useTranslator( 'Your Reservation :', 'Tu Reserva :' );
    const firstLine = useTranslator( firstEng, firstEsp );
    const secondLine = useTranslator( secondEng, secondEsp );
    const thirdLine = useTranslator( thirdEng, thirdEsp );


    return (
        <div className ={ styles['step-2-height'] }>
            <label htmlFor="date-hour" className ={ styles['input-label'] }>
                { title }
            </label>
            <p id='date-hour' className ={ styles['date-hour'] }>
                { firstLine }
                { props.count !== null && secondLine }
                { props.contact.name !== "" &&  thirdLine }
            </p>
            <ul className ={ styles['date-hour__line'] + ' ' + styles['contact-list'] }>
                { props.contact.email !== "" && (
                    <li >
                        <MailIcon />
                        <p> { props.contact.email } </p>
                    </li>
                )}
                { props.contact.phone !== "" && (
                    <li >
                        <PhoneIcon />
                        <p> { props.contact.phone } </p>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default DateHour;