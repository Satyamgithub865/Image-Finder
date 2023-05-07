import React from 'react'
import { Grid } from '@mui/material';
import Image from './Image'

const DisplayImage = ({ data }) => {

    return (
        <Grid style={{padding:8}} container spacing={1}>
            {
                data.map(image => (
                    <Grid item  xs={12} sm={6} md={4} lg={4} key={image.id}>
                        <Image image={image} />
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default DisplayImage
