import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Expenditure from '../../component/Expenditure/Expenditure'
import Income from '../../component/Income/Income'

export default function Home() {
  const { dataContainer } = useSelector((state) => {
    console.log(state)
    return state
  });
  useEffect(() => {
  }, [dataContainer])
  return (
    <div style={{ color: 'black', height: 'calc(100vh - 80px)' }} className='flex'>
      <div className='md:w-4/5 sm:w-1/2 w-1/2 border-dotted border-black border-slate-200 md:border-r-2 relative'>
        <h5 className='text-lg p-2 text-center expend ' type='button' onClick={() => { }}>Expenditure</h5>
        <div className='flex'>
          <Expenditure data={dataContainer?.Expenditure} />
        </div>
      </div>

      <div className='md:w-1/5 sm:w-1/2 w-1/2  relative'>
        <h5 className='text-lg p-2 text-center income'>Income</h5>
        <div className='flex'>
          <Income data={dataContainer?.Income} />
        </div>
      </div>
    </div>
  )
}

