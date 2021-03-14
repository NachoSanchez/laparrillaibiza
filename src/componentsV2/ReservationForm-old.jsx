import React, { useState } from 'react';
import './Reservations.css';

const ReservationsForm = (props) => {
    const initialValue = {
        name: '',
        email: '',
        phone: '',
        people: 1,
        date: new Date(),
        message: ''
    };
    
    const [ count, setCount ] = useState(1);
    const [ form, setForm ] = useState(initialValue);

    const handleIncrement = e => {
        e.preventDefault();
        setCount( count + 1 );
    }

    const handleDecrement = e => {
        e.preventDefault();
        setCount( count - 1)
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setForm({...form, [name]: value , people: count});
    }

    const handleSubmit = e => {
        e.preventDefault();
        /*
            const sending = useFirestore( 'reservations', form );
            if (sending === 'false') { 
                setForm(initialValue)
            }
        */
        props.addReservation(form);
    }

    return ( 
        <form className='reservations-form' onSubmit={ handleSubmit }>
            <section >
                <label htmlFor='name'>
                    name :
                    <input 
                        id='name' name='name'
                        type='text' 
                        placeholder={ form.name }
                        onChange={ handleChange }
                    />
                </label>
                <label htmlFor='email'>
                    email : 
                    <input 
                        id='email' name='email' 
                        type="email"
                        placeholder={ form.email }
                        onChange={ handleChange }
                    />
                </label>
                <label htmlFor='phone'>
                    phone : 
                    <input 
                        id='phone' name='phone' 
                        type='text'
                        placeholder={ form.phone }
                        onChange={ handleChange }
                    />
                </label>
                <label htmlFor='people'>
                    people :
                    <div className='people-count'>
                        we are 
                        <button onClick={ handleDecrement  }> - </button>
                        { count }
                        <button onClick={ handleIncrement }> + </button>
                    </div>
                </label>
                <label htmlFor='date'>
                    when :
                </label>
                <label htmlFor='message'>
                    message :
                    <textarea 
                        name='message' 
                        id='message'
                        placeholder={ form.message }
                        onChange={ handleChange }
                    ></textarea>
                </label>
            </section>

            <button className='btn-form'>
                submit
            </button>
        </form>
    );
}
 
export default ReservationsForm;