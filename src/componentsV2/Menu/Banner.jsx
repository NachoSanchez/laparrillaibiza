import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = (props) => {

    return (
        <div className ='banner' style ={{ backgroundImage : `url(${ props.img })` }}>

            <h2> { props.title } </h2>
        
            <Link to ={ props.redirect }>
                { props.button }
            </Link>

        </div>
    );
}
 
export default Banner;