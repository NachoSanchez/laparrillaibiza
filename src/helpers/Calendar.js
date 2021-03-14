import moment from 'moment';

export const months = [
    {
        eng : 'January',
        esp : 'February'
    },{
        eng : 'Febraury',
        esp : 'Febrero'
    }, {
        eng : 'March',
        esp : 'Marzo'
    },{
        eng : 'April',
        esp : 'Abril'
    },{
        eng : 'May',
        esp: 'Mayo'
    },{
        eng : 'June',
        esp : 'Junio'
    },{
        eng : 'July',
        esp : 'Julio'
    },{
        eng : 'August',
        esp : 'Agosto'
    },{
        eng : 'September',
        esp : 'Septiembre'
    },{
        eng : 'October',
        esp : 'Octubre'
    },{
        eng : 'November',
        esp : 'Noviembre'
    },{
        eng : 'December',
        esp : 'Diciembre'
    }
]

export const weekdays = {
    eng : [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
    esp : [ 'Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab' ]
}

export class Reservation {
    constructor(date, month, year, hour, minute){
        this.date = date ;
        this.month = month ;
        this.year = year;
        this.hour = hour;
        this.minute = minute
    }

    setDate() {
        return moment.utc().set( this ).format()
    }
}


const Calendar = {
    //attr
    date : moment().date(),
    month : moment().month(),
    weekday : moment().weekday(),
    year : moment().year(),

    //methods
    getFullMonth (num) {
        //Get days number in selected month
        let monthDays = moment().month(num).daysInMonth();

        // set Month as an empty array.
        let Month = [];
        
        //if selected month is minor to current month it will add a year to go future.
        let year =  num < this.month ? this.year + 1 : this.year;
        
        //Check what day of the week is the first of the week for later markup.
        const initialDay =  moment().year(year).month(num).date(1).weekday();
        let i = initialDay > 0 ? 1 - initialDay : 1
        
        const lastDay =  moment().year(year).month(num).date(monthDays).weekday();
        if( lastDay < 6 ) {
            const add = 6 - lastDay;
            monthDays += add;
        }
    
        while( i <= monthDays ) {
            const current = moment().year(year).month(num).date(i)
            const day = {
                date : current.date(),
                month : current.month(),
                weekday : current.weekday(),
                year : current.year(),
                daysFromNow : i,
                disabled: moment('2020-'+ current.month() +'-'+ current.date() , 'YYYY-MM-DD')
                            .isAfter('2020-0' + this.month +'-'+ this.date )
            }
            Month.push(day)
            i++;
        }

        return Month;
    },

    selectDate ( daysFromNow ) {
        moment.utc().add( daysFromNow );
    }
}

export default Calendar




