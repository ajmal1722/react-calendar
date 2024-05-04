import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';

const Calendar = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className='lg:w-1/2'>
            <ReactCalendar onChange={onChange} value={value} />
        </div>
    )
}

export default Calendar

