import React from 'react';
import allergenics from '../api/allergenics';


const AllergenicIcon = (props) => {
    switch(props.type) {
        case 1:
            return (
                <img src={ allergenics[0].img } alt='contains Dairy products'/>
            )
        case 2:
            return (
                <img src={ allergenics[1].img } alt='contains Gluten'/>
            )
        case 3:
            return (
                <img src={ allergenics[2].img } alt='contains Eggs' />
            )
        case 4:
            return (
                <img src={ allergenics[3].img } alt='contains Sesame' />
            )
        case 5:
            return (
                <img src={ allergenics[4].img } alt='contains sulphites' />
            )
        case 6:
            return (
                <img src={ allergenics[5].img } alt='contains fish' />
            )
        default:
            return null
    }
}
 
export default AllergenicIcon;