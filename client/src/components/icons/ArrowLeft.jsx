import React from 'react'

const ArrowLeft = ({ onPrev }) => {
  return (
    <svg
      onClick={onPrev}
      className='arrow-left'
      xmlns='http://www.w3.org/2000/svg'
      width='77'
      height='77'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='#eae7e1'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' />
      <line x1='5' y1='12' x2='19' y2='12' />
      <line x1='5' y1='12' x2='9' y2='16' />
      <line x1='5' y1='12' x2='9' y2='8' />
    </svg>
  )
}

export default ArrowLeft
