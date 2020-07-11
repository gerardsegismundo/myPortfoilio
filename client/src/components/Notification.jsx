import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component'
import React from 'react'

const Notification = () => {
  // eslint-disable-next-line
  const call = () => {
    store.addNotification({
      title: 'Sucess',
      message: 'Message sent!',
      type: 'success',
      insert: 'center',
      container: 'center',
      animationIn: ['animated', 'fadeIn'],
      animationOut: ['animated', 'fadeOut'],
      dismiss: {
        duration: 5000,
        onScreen: true
      }
    })
  }
  return (
    <div>
      <ReactNotification />
    </div>
  )
}

export default Notification
