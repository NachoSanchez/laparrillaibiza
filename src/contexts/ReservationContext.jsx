import React, { createContext, useState, useEffect } from 'react';
import { db } from '../firebase';

export const ReservationContext = createContext();

//Initial state of reservation
const initialState = {
    date: null, hour: null, count: null, name: null, phone: null, mail: null
};

const addReservation = async (res) => {
    await db.collection('reservations').doc().set(res);
    setReservation({ ...reservation, saved : true });
}

const ReservationContextProvider = (props) => {

    const [ reservation, setReservation ] = useState({
        data : initialState, saved: false
    });

    const providerValue = { reservation, setReservation };

    useEffect(
        () => {
            addReservation(reservation.data);
            console.log('useEffect hook on ReservationCtx has run');
        }, [ reservation ]
    )

    return (
        <ReservationContext.Provider value ={ providerValue }>
            { props.children }
        </ReservationContext.Provider>
    );
}
 
export default ReservationContextProvider;
