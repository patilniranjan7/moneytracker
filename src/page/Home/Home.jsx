import React from 'react'

export default function Home() {
  return (
    <div style={{color: 'black',height:'calc(100vh - 80px)'}} className='flex'>
      <div className='md:w-3/5 w-100 border-dotted border-black border-slate-200 md:border-r-2'>
      <h5 className='text-lg p-2 text-center bg-rose-200 '>Expenditure</h5>
      </div>
     
      <div className='md:w-2/5 w-100'>
      <h5 className='text-lg p-2 text-center bg-green-200'>Income</h5>
      </div>
    </div>
  )
}

