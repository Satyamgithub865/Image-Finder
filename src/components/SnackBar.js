import React from 'react'
import { Snackbar, Alert } from '@mui/material'

const SnackBar = ({ snackopen, setSnackopen }) => {
 
    const handleClose = (event, reason) => {
        if(reason === 'clickaway') {
            return;
        }
        setSnackopen(false);
    }

    return (
        <Snackbar open={snackopen} autoHideDuration={3000} onClose={handleClose}>
            <Alert severity="success" onClose={handleClose}>
                Number of images should be between 3 and 200
            </Alert>
        </Snackbar>
  )
}

export default SnackBar
