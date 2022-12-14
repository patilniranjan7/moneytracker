import React, { useState } from 'react'
import AddCardPopup from '../../layout/AddCardPopup'
import Card from '../../layout/Card'
import CardUI from '../UI/CardUI'

export default function Expenditure({ data, ...props }) {
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
      <AddCardPopup name='Expenditure' />
    </div>
  )
}
