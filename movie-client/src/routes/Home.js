import React from "react";
import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";

import {
  Loading,
  StyledHeader,
  StyledTitle,
  StyledSubtitle,
} from "../util/styledcomponents";
import Poster from "../components/Poster";

const headerImg =
  "https://media.istockphoto.com/photos/movie-projector-on-dark-background-picture-id1007557230?k=6&m=1007557230&s=612x612&w=0&h=2c6NHjfH4sWCgTNoZCDLQx10_PdIfl-dI-nyZ9wF_jI=";

const StyledWrapper = styled.div`
  height: 100%;
`;
const StyledMovieWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const StyledMovieContainer = styled.div`
  width: 70%;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const GET_MOVIES = gql`
  query {
    movies {
      id
      medium_cover_image
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  return (
    <StyledWrapper>
      <StyledHeader url={headerImg}>
        <StyledTitle>MOVIE APP</StyledTitle>
        <StyledSubtitle>
          movie app with apollo, graphql and react..
        </StyledSubtitle>
      </StyledHeader>
      <StyledMovieWrapper>
        <StyledMovieContainer>
          {loading && <Loading>Loading</Loading>}
          {!loading &&
            data &&
            data.movies.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                img={movie.medium_cover_image}
              ></Poster>
            ))}
        </StyledMovieContainer>
      </StyledMovieWrapper>
    </StyledWrapper>
  );
};

export default Home;
