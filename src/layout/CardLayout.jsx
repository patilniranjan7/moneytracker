import React from 'react'

export default function CardLayout({ children }) {
    return (
        <div className='w-1/2 md:w-1/3 capitalize p-2 relative'>{children}</div>
    )
}
