import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';

const Calendar = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className='bg-indigo-200 p-2'>
            <div className="sm:w-96">
                <ReactCalendar onChange={onChange} value={value} />
            </div>
        </div>
    )
}

export default Calendar

