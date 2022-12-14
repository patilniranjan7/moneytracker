import React from 'react';
import AddCardPopup from '../layout/AddCardPopup';
import CardUI from './UI/CardUI';

const RenderCard = ({ data, name }) => {
    return (
        <div className='flex flex-row flex-wrap justify-center grow'>
            {
                (data || []).map((item, index) => {
                    return (
                        <CardUI className='cursor-default'>
                            {item.name}
                        </CardUI>
                    )
                })
            }
            <AddCardPopup name={name} />
        </div>
    );
}

export default RenderCard;
