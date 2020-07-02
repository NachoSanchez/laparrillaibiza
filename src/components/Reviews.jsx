import React, { useContext, useState, useEffect } from 'react';
import { ENG, ESP } from '../api/reviews';
import { LanguageContext } from '../contexts/LanguageContext';
import styles from './Proposal.module.css';

function starsImg(num) {
    switch (num) {
        case 2:
            return <img src={require('../assets/img/stars-2.svg')} alt='2 stars review'/>;
        case 3:
            return <img src={require('../assets/img/stars-3.svg')} alt='3 stars review'/>;
        case 4: 
            return <img src={require('../assets/img/stars-4.svg')} alt='4 stars review'/>;
        default:
            return <img src={require('../assets/img/stars-5.svg')} alt='5 stars review'/>;
    }
}

const Reviews = () => {
    const { english } = useContext(LanguageContext);
    const reviews = english ? ENG : ESP;
    
    const show = styles['review'] + ' ' + styles['review-show'];
    const hide = styles['review'] + ' ' + styles['review-hide'];


    const [ activeIndex, setActiveIndex ] = useState(0);

    useEffect(() => {
        const tick = setInterval(() => {
            if(activeIndex < reviews.length - 1) {
                setActiveIndex(activeIndex + 1)
            } else {
                setActiveIndex(0)
            }
        }, 2500);
        return () =>  clearInterval(tick);

    }, [ activeIndex, reviews.length ]);

    return ( 
        <div className={ styles['container'] }>
            { reviews.map(
                (review, index) => (
                    <div 
                        key={ index }
                        className={ index === activeIndex ? show : hide }
                    >
                        <span> { starsImg(review.stars) } </span>
                        <h3> { review.user } </h3>
                        <p> { review.body } </p>
                        <p> { review.source } </p>
                    </div>
            )
            ) }
        </div>
     );
}
 
export default Reviews;