import React from 'react'
import RingLoader from 'react-spinners/RingLoader'
import { connect } from 'react-redux'

const RingLoaderOverlay = ({ isSending }) => {
  return (
    <div className='ring-loader-overlay'>
      <div className='container__sending'>
        {isSending}
        <RingLoader size={175} color={'#cdc175'} loading={true} />
        <p className='sending-msg'>Sending message... </p>
      </div>
      <div className='container__sent'>
        <i className='fa fa-check'></i>
        <p className='sent-msg'>Message sent.</p>
      </div>
    </div>
  )
}

const mapStateToProps = ({ isSending }) => ({
  isSending
})

export default connect(mapStateToProps, null)(RingLoaderOverlay)
