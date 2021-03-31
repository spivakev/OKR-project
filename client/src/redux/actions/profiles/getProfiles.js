import { handleErrors } from '../../../api/handleErrors'

import {
  GET_PROFILES_START,
  GET_PROFILES_SUCCESS,
  GET_PROFILES_ERROR,
  GET_PROFILES_RESET
} from './types'

export const getProfilesAction = () => {
  return async (dispatch) => {
    dispatch(getProfilesStart())

    fetch('http://localhost:8080/api/profile')
      .then(handleErrors)
      .then(response => response.json())
      .then(json => { dispatch(getProfilesSuccess(json)) })
      .catch(error => { dispatch(getProfilesError(error)) })
  }
}


export const getProfilesStart = () => ({
  type: GET_PROFILES_START
})

export const getProfilesSuccess = (profiles) => ({
  type: GET_PROFILES_SUCCESS,
  payload: { profiles }
})

export const getProfilesError = (error) => ({
  type: GET_PROFILES_ERROR,
  payload: { error }
})

export const getProfilesReset = () => ({
  type: GET_PROFILES_RESET
})
