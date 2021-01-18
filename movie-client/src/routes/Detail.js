import React from "react";
import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { StyledTitle, StyledSubtitle, Box } from "../util/styledcomponents";

const StyledWrapper = styled.div`
  width: 100%;
  height: 500px;

  position: fixed;
  z-index: -10;
  background: url(${(props) => props.url}) no-repeat top/cover;
`;
const StyledGlass = styled.div`
  width: 100%;
  height: 500px;

  position: fixed;

  z-index: -5;
  background: linear-gradient(#0f0f0f 5%, transparent, #0f0f0f);
`;
const DetailWrapper = styled.div`
  width: 100%;
  height: 500px;

  position: fixed;
  top: 15rem;

  display: flex;
  justify-content: space-around;
`;
const ImgWrapper = styled(Box)`
  width: 13.5rem;
  height: 500px;
  padding-top: 0.6rem;
  
  position: relative;
  left: 5rem;
  top: -2rem;
  border: #ea5d35 1px solid;

  display: flex;
  justify-content: center;
`;
const TextWrapper = styled(ImgWrapper)`
  width: 60%;
  left: -10rem;
  top: 0rem;

  z-index: -3;
  justify-content: flex-end;
`;
const TextContainer = styled(Box)`
  background: #0f0f0f;
  width: 80%;
  height: 92%;
`
const ImgContainer = styled.div`
  width: 95%;
  height: 60%;

  border-radius: 20px;
  background: url(${(props) => props.url}) no-repeat center/contain;
`;

const MOVIE_DETAIL = gql`
  query movieDetail($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      background_image
    }
  }
`;
const Detail = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(MOVIE_DETAIL, {
    variables: { id: +id },
  });
  if (loading) {
    return "loading";
  }
  if (data && data.movie) {
    console.log(data.movie);
    return (
      <StyledWrapper url={data.movie.background_image}>
        <StyledGlass />
        <DetailWrapper>
          <ImgWrapper>
            <ImgContainer url={data.movie.medium_cover_image} />
          </ImgWrapper>
          <TextWrapper>
            <TextContainer>
            <h1>{data.movie.title}</h1>

            </TextContainer>
          </TextWrapper>
        </DetailWrapper>
      </StyledWrapper>
    );
  }
};

export default Detail;
