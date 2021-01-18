import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

import { Box } from '../util/styledcomponents'

const StyledMovie = styled.div`
    color: white;
`
const Movie = ({id, img}) => {
    return (
        <StyledMovie>
            <Link to={`/${id}`}>
                <Box img={`${img}`}></Box>
                </Link>
        </StyledMovie>
    );
};

export default Movie;