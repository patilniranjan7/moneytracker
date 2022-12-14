import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Checkbox from '../component/UI/CheckBox';
import { CancelBtn, DoneBtn } from '../component/UI/CustButton'
import { AddNewData } from '../store/actions/AddDataActions';

const AddCard = ({ showModal, setShowModal, heading }) => {

    const dispatch = useDispatch();
    const [information, setInformation] = useState({ name: '', type: '', value: '' })
    useEffect(() => {
        setShowModal(showModal);
    }, [showModal]);

    const HandleSubmit = () => {
        dispatch(AddNewData({ from: heading, ...information }))
        setShowModal(false)
    }
    return (
        <>
            {showModal && (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setShowModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                                <h1 className="text-xl p-5 text-center font-bold text-gray-900 dark:text-gray-600"> {heading}</h1>
                                <div className='hoverEffect'>
                                    <label htmlFor="in-out-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600 text-center">Reference name</label>
                                    <div className="bg-gray-50 border-0 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-100 dark:bg-gray-100 dark:placeholder-gray-400 dark:text-black  m-1 text-center " contentEditable={true} placeholder="Enter the text" onInput={(e) => { setInformation({ ...information, name: e.target.innerText }) }} />

                                </div>
                                <div className='hoverEffect'>
                                    <label className=' text-center block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600 mt-4'>
                                        Type
                                    </label>
                                    <div className="flex m-1 ml-4 mr-4">
                                        <div className="flex w-1/2 justify-center">
                                            <Checkbox name="circular" id='sameForToggle' onClickHandler={(checked) => {
                                                setInformation({ ...information, type: 'Fixed' })
                                            }} />
                                            <p>Fixed {heading}</p>
                                        </div>
                                        <div className="flex w-1/2 justify-center">
                                            <Checkbox name="circular" id='sameForToggle' onClickHandler={(checked) => {
                                                setInformation({ ...information, type: 'varible' })
                                            }} />
                                            <p>varible {heading}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='hoverEffect'>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600 text-center mt-4">Value</label>
                                    <div className="bg-gray-50 border-0 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-100 dark:bg-gray-100 dark:placeholder-gray-400 dark:text-black  m-1 text-center " contentEditable={true} onInput={(e) => { setInformation({ ...information, value: e.target.innerText }) }} />

                                </div>
                                <div className="flex justify-center mt-4" onClick={HandleSubmit}>
                                    <DoneBtn name={'Add Entry'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
export default AddCard;

