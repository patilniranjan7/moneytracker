import React from 'react';


export const CancelBtn = ({name}) => {
       return (
                <button class="bg-transparent hover:bg-red-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-grey-700 hover:border-transparent rounded">
                    {name ? name : 'cancel'}
                </button>
            );
}

export const DoneBtn = ({name}) => {
    return (
        <button class="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-grey-500 hover:border-transparent rounded">
            {name ? name : 'Done'}
        </button>
    );
}

