import React, { useState } from 'react'

const CustomTextarea = ({ value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className='custom-textarea'>
      <label htmlFor='message' className={isFocused ? 'is-focused' : ''}>
        Message
      </label>

      <textarea
        value={value}
        className={isFocused ? 'is-focused' : ''}
        name='message'
        onChange={onChange}
        placeholder={isFocused ? '' : 'Enter your message'}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          if (value.length < 1) setIsFocused(false)
        }}
        required
      ></textarea>
      {/* <span className='error-msg'>Invalid.</span> */}
    </div>
  )
}

export default CustomTextarea
