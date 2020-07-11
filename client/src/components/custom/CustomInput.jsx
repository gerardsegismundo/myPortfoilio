import React from 'react'

const CustomInput = ({ name, placeholder, value, onChange, error }) => {
  return (
    <div className='custom-input'>
      <input
        type='text'
        required
        name={name}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={name}>{placeholder}</label>
      <span className='line' />
      {error && <span className='error-msg'>{error}</span>}
    </div>
  )
}

export default CustomInput
