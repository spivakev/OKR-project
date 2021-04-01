import React from 'react';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, CircularProgress, Paper } from '@material-ui/core';
import { getProfilesAction, getProfilesReset } from '../../redux/actions/profiles/getProfiles';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const headers = ['ID', 'Фамилия', 'Имя', 'Отчество', 'Email', 'Пароль', 'Телефон', 'Должность', 'Создан', 'Обновлен']


export const ProfilesPage = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
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
      {loading && <CircularProgress />}
      {!loading && profiles &&
        <TableContainer>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                {headers.map(header => <TableCell key={header}>{header}</TableCell>)}
              </TableRow>
            </TableHead>
            <TableBody>
              {profiles.map(row => (
                <TableRow key={row.email}>
                  {Object.values(row).map(val => <TableCell key={`${row.id}${val}`}>{val}</TableCell>

                  )}
                </TableRow>
              ))}
            </TableBody>

          </Table>
        </TableContainer>
      }
    </>
  )

}