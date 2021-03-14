import React from 'react';
import sprite from '../assets/img/tintos.png';
import { ENG } from '../api/newWines';
import Picker from './Beverages/Picker';

const Where = (props) => {
    return (
        <section className ='grid-container'>
            <Picker items ={ ENG[2].options } sprite ={sprite}  />
        </section>
    );
}
 
export default Where;