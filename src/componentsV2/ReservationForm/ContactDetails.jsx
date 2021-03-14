import React from 'react';
import { FormField } from './Pieces';

const ContactDetails = ( props ) => {

    const setName = (param) => {
        props.setter({
            ...props.state,
            name: param
        })
        console.log('Validated')
    }
    const setEmail = (param) => {
        props.setter({
            ...props.state,
            email: param
        })
    }
    const setPhone = (param) => {
        props.setter({
            ...props.state,
            phone: param
        })
    }

    const handleFocus = props.count  !== null ? true : false;
 
    /*important! use "" for empty string validation*/ 
    return (
        <> 
            { props.state.name === "" &&            
                (<FormField 
                    eng ='name :' esp ='nombre :' 
                    field ='name' type ='text' 
                    setter ={ setName }
                    focus = { handleFocus }
                />)}

            { props.state.email === "" &&
                (<FormField 
                    eng ='email :' esp ='email :' 
                    field ='email' type ='text' 
                    setter ={ setEmail }
                />)}

            { props.state.phone === "" &&
                (<FormField 
                    eng ='phone :' esp ='telefono :' 
                    field ='phone' type ='text' 
                    setter ={ setPhone }
                />)}
        </>
    );
}
 
export default ContactDetails;