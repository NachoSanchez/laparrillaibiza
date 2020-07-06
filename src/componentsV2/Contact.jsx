import React from 'react';
import { db } from '../firebase';
import useTranslator from '../hooks/useTranslator';
import styles from './Contact.module.css';
import Form from './ReservationForm';

const Contact = () => {
    const title = useTranslator('Make your Reservation.', 'Hacé tu Reserva.');

    const addReservation = async (reservation) => {
        await db.collection('reservations').doc().set(reservation)
        console.log('Reservado!')
    }

    return (
        <section className={'grid-container ' + styles['contact']}>
            <h1> { title } </h1>
            <Form addReservation={ addReservation } />
        </section>
    );
}
 
export default Contact;