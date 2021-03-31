import {
  GET_PROFILES_START,
  GET_PROFILES_SUCCESS,
  GET_PROFILES_ERROR,
  GET_PROFILES_RESET
} from '../actions/profiles/types'

const initialState = {
  profiles: null,
  loading: false,
  success: false,
  error: ''
}

export const profilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILES_START:
      return {
        ...state,
        loading: true
      }
    case GET_PROFILES_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        profiles: action.payload.profiles
      }
    case GET_PROFILES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    case GET_PROFILES_RESET:
      return {
        ...state,
        loading: false,
        success: false,
        error: ''
      }
    default:
      return state
  }
}