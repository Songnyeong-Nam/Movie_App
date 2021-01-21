import styled from 'styled-components';

export const Loading = styled.div`
    height: 500px;
    background: linear-gradient(to left, #dee1dd, #28363d);
    
    display: flex;
    align-items: center;

    font-size: 3.0rem;
    color: white;   
`
export const StyledHeader = styled.div`
    width: 100%;
    height: 300px;
    margin: 20px 0 20px 0;
    background: no-repeat center/cover url(${props => props.url});

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Box = styled.div`
    width: 190px;
    height: 250px;

    margin: 10px;
    padding: 3px;

    background: url(${props => props.img}) no-repeat center/cover;
    
    border-radius: 20px;
    box-shadow: 0px 0px 10px 3px rgba(250, 238, 206, 0.3);
`
export const StyledTitle = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    color: rgb(231, 225, 213);
`
export const StyledSubtitle = styled.h2`
    font-size: 1.8rem;
    color: wheat;
`
export const Styledp = styled.p`
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: wheat;
`