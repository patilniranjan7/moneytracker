import React from 'react'
import Expenditure from '../../component/Expenditure/Expenditure'
import Income from '../../component/Income/Income'

export default function Home() {
  return (
    <div style={{color: 'black',height:'calc(100vh - 80px)'}} className='flex'>
      <div className='md:w-4/5 w-100 border-dotted border-black border-slate-200 md:border-r-2'>
      <h5 className='text-lg p-2 text-center expend '>Expenditure</h5>
        <div className='flex'>
          <Expenditure />
        </div>
      </div>
     
      <div className='md:w-1/5 w-100'>
      <h5 className='text-lg p-2 text-center income'>Income</h5>
      <div className='flex'>
          <Income />
        </div>
      </div>
    </div>
  )
}

