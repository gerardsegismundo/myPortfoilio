import {
  animateSendingSpinner,
  animateSentSpinner
} from '../../animations/sendingAnimations'

const setIsSending = condition => async dispatch => {
  if (condition) {
    await dispatch({
      type: 'SET_IS_SENDING',
      payload: condition
    })

    animateSendingSpinner()
  } else {
    animateSentSpinner(() =>
      dispatch({
        type: 'SET_ISSENDING',
        payload: condition
      })
    )
  }
}

const setIsScreenSmall = condition => dispatch => {
  dispatch({
    type: 'SET_IS_SCREEN_SMALL',
    payload: condition
  })
}

const setDimensions = () => dispatch => {
  dispatch({
    type: 'SET_DIMENSIONS'
  })
}

export { setIsSending, setIsScreenSmall, setDimensions }

// export const enableSticky = () => dispatch =>
//   dispatch({
//     type: ENABLE_STICKY
//   })
