import React, { useState } from 'react'
import AddCardPopup from '../../layout/AddCardPopup'
import Card from '../../layout/Card'

export default function Expenditure({ data, ...props }) {
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
      <AddCardPopup name='Expenditure' />
    </div>
  )
}
