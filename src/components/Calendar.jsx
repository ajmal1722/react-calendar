import  { useState } from 'react';
import ReactCalendar from 'react-calendar';
import { useSelector, useDispatch } from 'react-redux';
import { addToEvents } from '../Redux/events/eventSlice'

const Calendar = () => {
    const [value, onChange] = useState(new Date());
    const options = { month: 'short', day: 'numeric', year: 'numeric'}
    const selecedDate = value.toLocaleDateString('en-US', options);
    const [showModal, setShowModal] = useState(false);
    const [eventText, setEventText] = useState('');
    const events = useSelector(state => state.events.value);
    const dispatch = useDispatch();

    const enableModal = () => {
        setShowModal(prevState => !prevState)
    }

    const handleEvents = () => {
        dispatch(addToEvents({ date: selecedDate, event: eventText }))
        enableModal()
        setEventText(''); 
    }

    console.log('Event date:', selecedDate)

    return (
        <div className=' p-2'>
            <div className="sm:w-96">
                <ReactCalendar onChange={onChange} value={value} onClickDay={enableModal}/>
            </div>
            { showModal && (
                <div className="fixed h-full w-screen backdrop-blur top-0 right-0">
                    <div className="flex items-center justify-center h-screen">
                        <div className="bg-gray-400 rounded-xl">
                            <div className="px-6">
                                <input type="text" className='py-2 px-3 my-8 rounded-md' placeholder='Event...'
                                value={eventText}
                                onChange={(e) => setEventText(e.target.value)}
                                />
                                <button className="ml-12" onClick={enableModal}>
                                    close
                                </button>
                            </div>
                            <button className='mb-6 bg-green-600' onClick={handleEvents}>
                                Add Event
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Calendar

