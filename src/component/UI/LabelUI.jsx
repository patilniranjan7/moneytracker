import React from 'react'

export default function LabelUI({ heading, onClickEvent }) {
    return (
        <h2 className="h2 p-2 capitalize pointer w-fit" onClick={onClickEvent}>{heading}</h2>
    )
}
