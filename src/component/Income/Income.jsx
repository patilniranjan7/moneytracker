import React from 'react';
import AddCardPopup from '../../layout/AddCardPopup';
import Card from '../../layout/Card';

const Income = ({ data, ...props }) => {
    console.log(data)
    return (
        <div className='flex flex-row flex-wrap justify-center grow'>
            {
                (data || []).map((item, index) => {
                    return (
                        <Card className='cursor-default'>
                            {item.name}
                        </Card>
                    )
                })
            }
            <AddCardPopup name='Income' />
        </div>
    );
}

export default Income;
