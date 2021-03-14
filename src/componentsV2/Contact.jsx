import React from 'react';
import { motion } from 'framer-motion';
import { Form } from './ReservationForm';
import useTranslator from '../hooks/useTranslator';
import styles from './ReservationForm/ReservationForm.module.css';

const Contact = () => {
    const title = useTranslator('Make your Reservation.', 'Reservá tu lugar.');

    return (
        <section className='grid-container'>
            <aside className={ styles['form-aside'] }>
                <motion.h2 
                    className ={ styles['form-aside__title'] } 
                    initial ={{ x: 100, opacity: 0 }}
                    animate ={{ x: 0, opacity: 1 }}
                    transition ={{ duration: 0.8 }}
                > 
                {title} 
                </motion.h2>
                <motion.div 
                    className ={ styles['form-container'] }
                    initial ={{ opacity: 0 }}
                    animate ={{ opacity: 1 }}
                    transition ={{ duration: 0.5 }}
                >
                    <Form />
                </motion.div>
            </aside>
        </section>
    );
}
 
export default Contact;