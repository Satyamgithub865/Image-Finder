import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { Collections } from '@mui/icons-material'

const NavBar = () => {
  return (
    <AppBar position='static'>
        <Toolbar>
            <Collections />
            <Typography variant='h5'>ImageFinder</Typography>
        </Toolbar>
    </AppBar>
  )
}

export default NavBar
