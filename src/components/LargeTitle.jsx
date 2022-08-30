import React from 'react'

function LargeTitle({title, subTitle}) {
  return (
    <div className='my-[40px] text-center'>
        <h2 className='text-[42px] font-semibold'>{title}</h2>
        <br/>
        <p>{subTitle}</p>
    </div>
  )
}

export default LargeTitle