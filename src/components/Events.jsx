import { useDispatch, useSelector } from 'react-redux'
import { FaDeleteLeft } from 'react-icons/fa6'
import { removeFromEvents } from '../Redux/events/eventSlice';

const Events = () => {
    const events = useSelector(state => state.events.value);
    const dispatch = useDispatch();

    const handleDeleteEvent = (index) => {
        dispatch(removeFromEvents(index))
    }

    const today = new Date();
    const date = today.getDate();
    const options = { month: 'short', year: 'numeric'};
    const monthAndYear = today.toLocaleDateString('en-US', options);

    console.log('state:', events);
    
    return (
        <div className='bg-gray-800 lg:mx-16 sm:w-96  lg:mt-0 mt-6 mx-2 py-4 rounded-lg'>
            <div className='flex justify-between mx-2 my-4'>
                <h1 className='text-3xl font-medium mx-4'>
                    { date }
                </h1>
                <h1 className='text-2xl mt-2 font-medium'>
                    { monthAndYear }
                </h1>
            </div>
            <div>
            {events.map((event, index) => (
                    <div key={index} className='text-lg py-3 px-4 flex justify-between border m-1 rounded-lg'>
                        <div>{event.event}</div>
                        <div>{event.date}</div>
                        <div className="flex items-center justify-center h-full mt-1">
                            <FaDeleteLeft onClick={() => handleDeleteEvent(index)} className='cursor-pointer'/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Events
