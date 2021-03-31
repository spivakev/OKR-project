import React from 'react';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, CircularProgress } from '@material-ui/core';
import { getProfilesAction, getProfilesReset } from '../../redux/actions/profiles/getProfiles';

export const ProfilesPage = () => {
  const dispatch = useDispatch()
  const { profiles, loading, success, error } = useSelector(state => state.profiles)

  useEffect(() => {
    dispatch(getProfilesAction())
  }, [])

  useEffect(() => {
    /*TODO: добавить обработку ошибки*/
    if (success || error) dispatch(getProfilesReset())
  }, [success, error])

  return (
    <>
      {loading ? <CircularProgress />
        : profiles?.map(profile => <p>{profile.lastname} {profile.firstname} {profile.position}</p>)
      }
    </>
  )

}