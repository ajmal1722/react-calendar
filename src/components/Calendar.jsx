import  { useState } from 'react';
import ReactCalendar from 'react-calendar';

const Calendar = () => {
    const [value, onChange] = useState(new Date());
    const [showModal, setShowModal] = useState(false);

    const enableModal = () => {
        setShowModal(prevState => !prevState)
    }

    return (
        <div className='bg-indigo-200 p-2'>
            <div className="sm:w-96">
                <ReactCalendar onChange={onChange} value={value} onClickDay={enableModal}/>
            </div>
            { showModal && (
                <div className="fixed h-full w-screen backdrop-blur top-0 right-0">
                    <div className="flex items-center justify-center h-screen">
                        <div className="bg-gray-400 rounded-xl">
                            <div className="px-6">
                                <input type="text" className='py-2 px-3 my-8 rounded-md' placeholder='Event...'/>
                                <button className="ml-12" onClick={enableModal}>
                                    x
                                </button>
                            </div>
                            <button className='mb-6 bg-green-600 w-24'>
                                save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
        
    )
}

export default Calendar

