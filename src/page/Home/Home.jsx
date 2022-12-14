import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import RenderArrayLayout from '../../layout/RenderArrayLayout';

export default function Home() {
  const { dataContainer } = useSelector((state) => {
    console.log(state)
    return state
  });
  useEffect(() => {
  }, [dataContainer])
  return (
    <div style={{ color: 'black', height: 'calc(100vh - 80px)' }} className='flex'>
      <RenderArrayLayout data={dataContainer?.Expenditure} name='Expenditure' className='md:w-4/5 sm:w-1/2 w-1/2 border-dotted border-black border-slate-200 md:border-r-2 relative' />
      <RenderArrayLayout data={dataContainer?.Income} name='Income' className='md:w-1/5 sm:w-1/2 w-1/2  relative' />
    </div>
  )
}

