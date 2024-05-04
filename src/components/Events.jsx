import React from 'react'

const Events = () => {
    const today = new Date();
    const date = today.getDate();
    const options = { month: 'short', year: 'numeric'};
    const monthAndYear = today.toLocaleDateString('en-US', options)
    // const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return (
        <div className='bg-indigo-600 lg:mx-16 sm:w-96  lg:mt-0 mt-6 mx-2'>
            <div className='flex justify-between mx-2'>
                <h1 className='text-3xl mx-4'>
                    { date }
                </h1>
                <h1 className='text-2xl mt-2'>
                    { monthAndYear }
                </h1>
            </div>
        </div>
    )
}

export default Events
