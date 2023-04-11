import React from "react";

export default class FormatDates extends React.Component {

    constructor(){
        super();
        this.Date = {
            today: new Date()
        }
    }


    Day() {
        const days = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']
        
        const day = days[this.Date.today.getDay()]
       
        return day
    }

    DayNumber(){
        const day = this.Date.today.getDate()
        return day
    }

}
