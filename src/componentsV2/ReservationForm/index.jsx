import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DatePicker from './DatePicker';
import HourPicker from './HourPicker'
import DateHour from './DateHour';
import Count from './Count';
import ContactDetails from './ContactDetails';
import styles from './ReservationForm.module.css'
import HourPickerStyles from './HourPicker.module.css';

export const Form = () => {
    /**
     * In this component we´re going to maitain a centralized state
     * for the reservation model. So when the data off every input
     * is sanitized whe can dispatch a reservation object to the
     * reservationCtx to then be created.
     */
    const [ step, setStep ] = useState(1);
    const [ date, setDate ] = useState(null);
    const [ hour, setHour ] = useState(null);
    const [ count, setCount ] = useState(null);
    const [ contactDetails, setContactDetails ] = useState({
        name : '',
        phone : '',
        email : ''
    })

    const nextStep = (e) => {
        e.preventDefault();
        setStep( step + 1)
    }

    useEffect( () => console.log(date, hour, count, contactDetails), [date, hour, count, contactDetails] );

    switch ( step ) {
        case 1:
            return (
                <>
                    <DatePicker setDate ={ setDate } />
                {
                    date !== null && (
                        <motion.div 
                            initial ={{y: 50, opacity: 0, height: '0px'}}
                            animate ={{y: 0, opacity: 1, height: '250px'}}
                            className ={ HourPickerStyles['hp-wrapper'] }
                        >
                            <HourPicker 
                                setHour ={ setHour } 
                                date ={ date }
                                handleClick ={ nextStep }
                            />
                        </motion.div>
                    )
                }
                </>
            )   
        case 2:
            return (
                <motion.div 
                    initial ={{x: 500, opacity: 0}}
                    animate ={{x: 0, opacity: 1}}
                    transition ={{duration: 0.3}}
                    className ={ styles['step-2'] }
                >  
                    <DateHour 
                        month ={ date.month } 
                        date ={ date.date }
                        hour ={ hour.hour }
                        minutes ={ hour.minutes }
                        count ={ count }
                        contact ={ contactDetails }
                    />

                    <Count 
                        setCount ={ setCount } 
                        count ={ count }
                    />

                    <ContactDetails 
                        count ={ count } 
                        state ={ contactDetails }
                         setter ={ setContactDetails }
                    />
                    
                </motion.div>
            )
        default:
            break;
    }
}
 
