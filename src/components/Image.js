import React from 'react'
import { Card, styled } from '@mui/material'

const StyledCard = styled(Card)`
    width:100%;
    height: 350px;
    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const Image = ({ image }) => {
    return (
        <StyledCard>
            <img src={image.largeImageURL} alt="pic" />
        </StyledCard>
  )
}

export default Image
