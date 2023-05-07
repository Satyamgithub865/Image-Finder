import { Search } from '@mui/icons-material'
import { Box, InputBase, Paper, styled } from '@mui/material'
import React from 'react'

const Container = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px;
`

const StyledPaper = styled(Paper)`
    padding: 4px 4px;
    display: flex;
    align-items: center;
    width: 300px;
`

const SearchBar = ({ setText, setCount }) => {
    return (
        <Container>
            <StyledPaper style={{marginRight: 30}}>
                <Search />
                <InputBase
                    placeholder='Search Images'
                    style={{width: '90%'}}
                    onChange={(e) => setText(e.target.value)}
                />
            </StyledPaper>
            <StyledPaper>
                <Search />
                <InputBase
                    placeholder='Number of Images'
                    type='number'
                    style={{width: '90%'}}
                    onChange={(e) => setCount(e.target.value)}
                />
            </StyledPaper>
        </Container>
    )
}

export default SearchBar
