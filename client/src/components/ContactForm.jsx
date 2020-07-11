import React, { useState } from 'react'
import { CustomInput, CustomTextarea, SendIcon } from './custom'
// eslint-disable-next-line
import axios from 'axios'
import { connect } from 'react-redux'
import { setIsSending } from '../redux/ui/ui.actions'

const ContactForm = ({ setIsSending, isSending }) => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  })
  const { fullname, email, message } = formData

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // eslint-disable-next-line
  const [error, setError] = useState({
    fullname: '',
    email: '',
    message: ''
  })

  const clearForm = () => {
    setFormData({
      fullname: '',
      email: '',
      message: ''
    })
  }

  const hasError = label => (error[label].length > 0 ? true : false)

  const sendMessage = async e => {
    e.preventDefault()
    setIsSending(true)

    // const res = await axios.post('/api/email', formData)
    // console.log(res)

    setTimeout(() => {
      setIsSending(false)
      clearForm()
    }, 1500)
  }

  return (
    <form className='contact-form' onSubmit={sendMessage}>
      <div className='input-group'>
        <CustomInput
          placeholder='Full name'
          name='fullname'
          value={fullname}
          onChange={onChange}
          error={hasError('fullname') && error.fullname}
        />
        <CustomInput
          placeholder='Email'
          name='email'
          value={email}
          onChange={onChange}
          error={hasError('email') && error.email}
        />
      </div>

      <CustomTextarea
        value={message}
        onChange={onChange}
        error={hasError('message')}
      />
      <button type='submit' disabled={isSending}>
        Send
        <SendIcon />
      </button>
    </form>
  )
}

const mapStateToProps = ({ isSending }) => ({ isSending })

export default connect(mapStateToProps, { setIsSending })(ContactForm)
