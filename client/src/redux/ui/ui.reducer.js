const initialState = {
  isSending: false,
  isScreenSmall: null,
  dimensions: {
    height: window.innerHeight,
    width: window.innerWidth
  }
}

const uiReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_IS_SENDING':
      return {
        ...state,
        isSending: payload
      }
    case 'SET_IS_SCREEN_SMALL':
      return {
        ...state,
        isScreenSmall: payload
      }

    case 'SET_DIMENSIONS': {
      return {
        ...state,
        dimensions: {
          height: window.innerHeight,
          width: window.innerWidth
        }
      }
    }

    default:
      return state
  }
}

export default uiReducer
