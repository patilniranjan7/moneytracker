import React from 'react'
import RenderCard from '../component/RenderCard'

export default function RenderArrayLayout({ className, data, name }) {
    return (
        <>
            <div className={className}>
                <h5 className='text-lg p-2 text-center expend ' type='button' onClick={() => { }}>name</h5>
                <div className='flex'>
                    <RenderCard data={data} name={name} />
                </div>
            </div>
        </>
    )
}
