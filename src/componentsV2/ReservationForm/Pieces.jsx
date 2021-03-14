import React, { useState, useRef } from 'react';
import useTranslator from '../../hooks/useTranslator';
import styles from './ReservationForm.module.css';

export const NextButton = ( props ) => {
    const text = useTranslator(props.eng, props.esp);
    return (
        <span 
            onClick ={ props.handleClick }
            className ={ styles['next-btn']}
        >
            { text }
        </span>
    );
}

export const CheckButton = ( props ) => {
    return (
        <div 
            className ={ styles['svg-button__wrapper'] }
            onClick ={ props.onClick }
        >
            <svg className ={ styles['svg-button'] }
                xmlns='http://www.w3.org/2000/svg' viewBox='0 0 111.42 108.59'>
                <path d='M111.16,58.47A54.36,54.36,0,1,1,97.6,22.61L92.71,27.5a47.21,47.21,0,1,0,10.07,19.24l5.56-5.56A54.23,54.23,0,0,1,111.16,58.47Z' transform='translate(-2.57 -4.18)'/>
                <path d='M112,32.66,101.65,43,61.81,82.82a6.91,6.91,0,0,1-9.78,0L27,57.74A6.91,6.91,0,1,1,36.73,48l20.2,20.19L99.81,25.28l2.39-2.39A6.91,6.91,0,0,1,112,32.66Z' transform='translate(-2.57 -4.18)'/>
            </svg>
        </div>
    )
}

export const Label = ( props ) =>{
    const label = useTranslator( props.eng, props.esp )
    return (
        <label htmlFor={ props.field } className ={ styles['input-label'] }>
            { label }
        </label>
    )
}
 
export const FormField= ( props ) => {
    const name = useTranslator( props.eng, props.esp );
    const [ content, setContent ] = useState('');
    const refInput = useRef();

    if ( props.focus ) {
        refInput.current.focus();
    }

    const handleChange = (e) => setContent(e.target.value);
    
    const handleSetter = (e) => {
        if (e.key === 'Enter' ) {
            props.setter( refInput.current.value )
        }
    }

    const handleBlur = (e) => props.setter( refInput.current.value )

    return (
        <div className ={ styles['input-field'] } onClick ={ () => refInput.current.focus()  }>
            <label htmlFor={ props.field}> { name } </label>
            <input
                 onChange ={ handleChange } 
                 type={props.type} name={props.field} 
                 id={ props.field} value ={content}
                 ref ={ refInput }
                 onKeyPress = { handleSetter }
                 onBlur ={ handleBlur }
            />
            <span 
                className ={ styles['input-field__value'] }
            >{ content }</span>
        </div>
    )
}

export const MailIcon = () => {
    return (
        <svg viewBox ='0 0 115 115' className ={ styles['icon'] }>
            <g>
                <path d ='M105.7,29.4c-0.5,0.4-1,1-1.6,1.3c-11.1,7.4-22.3,14.7-33.4,22c-3.8,2.5-7.6,5-11.4,7.4c-0.6,0.4-1.8,0.4-2.4,0
                    c-15.1-9.9-30.1-19.8-45.2-29.7c-1.2-0.8-1.2-1.6-0.6-2.6c1.2-2.3,3.1-3.3,5.7-3.3c9.2,0,18.3,0,27.5,0c18.2,0,36.5,0,54.7,0
                    c2.6,0,4.6,0.8,5.9,3.1C105.2,28.2,105.3,28.6,105.7,29.4z'/>
                <path d ='M58,90.3c-13.6,0-27.3,0-40.9,0c-2.6,0-4.5-0.9-5.9-3.1c-0.7-1.1-0.7-2,0.6-2.8c11.6-7.3,23.2-14.7,34.9-22.1
                    c0.6-0.4,1.8-0.3,2.4,0c2.3,1.3,4.4,2.8,6.6,4.3c1.6,1.1,3.1,1.1,4.7,0c2.1-1.5,4.3-3,6.6-4.3c0.6-0.4,1.8-0.4,2.4,0
                    c11.7,7.3,23.3,14.7,34.9,22.1c1.3,0.8,1.3,1.6,0.7,2.8c-1.3,2.2-3.3,3.1-5.9,3.1C85.4,90.3,71.7,90.3,58,90.3z'/>
                <path d ='M105.7,78.3C94.9,71.5,84.5,64.8,73.6,58c10.7-7.1,21.3-14,32.1-21.1C105.7,50.8,105.7,64.3,105.7,78.3z'/>
                <path d ='M10.5,36.9c10.7,7.1,21.2,14,32,21.1c-10.8,6.8-21.3,13.5-32,20.3C10.5,64.4,10.5,50.8,10.5,36.9z'/>
            </g>
        </svg>
    )
}

export const PhoneIcon = () => {
    return (
        <svg viewBox ='0 0 115 115' className ={ styles['icon'] }>
            <g>
                <path d="M89.2,57.7c0,13,0,26.1,0,39.1c0,7.4-3.7,11.1-11,11.1c-13.8,0-27.6,0-41.4,0c-7.3,0-11-3.7-11-11.1c0-26.2,0-52.3,0-78.5
                    c0-7.5,3.7-11.2,11.1-11.2c13.7,0,27.4,0.1,41.2-0.1c6.1-0.1,11.4,3.6,11.2,11.3C89,31.5,89.2,44.6,89.2,57.7z M33.3,54.8
                    c0,9.7,0,19.5,0,29.2c0,4.9,2.5,7.4,7.3,7.4c11.2,0,22.5,0,33.7,0c5,0,7.4-2.5,7.4-7.5c0-19.4,0-38.8,0-58.2c0-5.2-2.3-7.5-7.5-7.6
                    c-11.1,0-22.2,0-33.3,0c-5.4,0-7.6,2.3-7.6,7.7C33.2,35.5,33.3,45.2,33.3,54.8z M57.7,101.3c1.4,0,2.2-1.1,2.3-2.5
                    c0-1.5-1.1-2.7-2.5-2.4c-1,0.2-2.2,1.4-2.4,2.4C54.8,100.1,55.7,101.3,57.7,101.3z"/>
            </g>
        </svg>
    )
}