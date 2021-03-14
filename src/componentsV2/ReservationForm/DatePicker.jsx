import React, { useState, useEffect } from 'react';
import Calendar, { months, weekdays } from '../../helpers/Calendar';
import useTranslator from '../../hooks/useTranslator';
import styles from './DatePicker.module.css';

/**
 *  Here the props object will only be used to set date
 +  on the parent form.
 *
 */

const DatePicker = (props) => {
    //Restrict reservation period for 3 months in advance only
    const maxIndex = Calendar.month + 2;
    const minIndex = Calendar.month;

    const [ index, setIndex ] = useState(minIndex); //month index (0 to 11)
    const [ month, setMonth ] = useState({
        days : []
    });

    const mountCalendar = (num) => {
        setMonth( { days : Calendar.getFullMonth( num ) })
    };

    //setting content for Language
    const h2 = useTranslator( months[index].eng, months[index].esp );
    const week = useTranslator( weekdays['eng'], weekdays['esp'] );

    //functions for setting Calendar and date
    const nextMonth = () => index === maxIndex ? null : setIndex( index + 1);
    const prevMonth =  () => index === minIndex ? null : setIndex( index - 1);

    useEffect(
        () => mountCalendar(index) , [index]
    );

    return (
        <div className = { styles['dp-wrapper'] }>
            <header className = { styles['dp-header'] }>
                <div 
                    onClick ={ prevMonth }
                    className ={ index === minIndex ? `${styles['dp-prev']} ${styles['dp-prev-disabled']}` : styles['dp-prev']}
                ></div>
                <h2> { h2 } </h2>
                <div 
                    onClick = { nextMonth } 
                    className ={ index === maxIndex ? `${styles['dp-next']} ${styles['dp-next-disabled']}` : styles['dp-next']}
                ></div> 
            </header>

            <div className ={ styles['dp-weekdays'] }>
            {   week.map( el => <h4 key ={ el }> { el } </h4>)  }    
            </div>

            <div className ={ styles['dp-calendar'] }>
            {
                React.Children.toArray(
                    month.days.map( 
                        day => ( 
                        <label 
                            htmlFor ={ `${day.date}-${day.month}-${day.year}` }
                            //className ={ handleClass(day) }
                            className ={  day.disabled ? styles['dp-calendar__day-avalible'] : styles['dp-calendar__day'] }
                        > 
                            { day.date } 
                            <input 
                                type='radio'  name ='date'
                                onClick ={ day.disabled ? () => props.setDate({ date: day.date, month: day.month,year: day.year }) : null}
                                id ={  `${day.date}-${day.month}-${day.year}` }
                                //checked = {Calendar.date + 1 === day.date && Calendar.month === day.month && day.year === day.year }
                            />
                        </label> 
                        )
                ))
            } 
            </div>         
        </div>
    )
}

export default DatePicker;