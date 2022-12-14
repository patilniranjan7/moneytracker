import React, { useState } from 'react';
import AddCard from './AddCard';
import CardUI from './Card';

const AddCardPopup = (props) => {

    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className={props.className + ' cursor-pointer absolute bottom-0 right-0'} onClick={() => setShowModal(Prev => !Prev)}>
                <CardUI>
                    <div className='border px-1 border-slate-400'>
                        {`Add ${props.name}`}
                    </div>
                </CardUI>
            </div>
            <AddCard showModal={showModal} setShowModal={(val) => { setShowModal(val) }} heading={props.name} />
        </>
    );
}

export default AddCardPopup;
