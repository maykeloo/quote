import styled from "styled-components";
import {RiDoubleQuotesL, RiDoubleQuotesR, RiArrowGoBackFill} from 'react-icons/ri'

export const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const ContentBox = styled.div`
  width: 80%;
  height: 80%;
  position: relative;
  display: flex;
`;

export const RightSide = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
`


export const Quotebar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Quotebox = styled.div`
    height: 60%;
    position: relative;
`

export const Quote = styled.span`
    color: white;
    font-family: 'Alice', serif;
    font-size: 8vmin;
`

export const Author = styled.div`
    color: white;
    transform: rotate(-90deg) translateX(100%);
    transform-origin: right bottom;
    font-size: 5vmax;
    margin: 0;
    padding: 0;
    line-height: 1em;
    margin-right: 30px;
`

export const Contentbar = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
`;

export const Authorbar = styled.div`
  width: 20%;
  height: 100%;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`;

export const Buttonbar = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
`;

export const RollbuttonBox = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const PrevbuttonBox = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Bar1 = styled.div`
    width: 100%;
`

export const PrevButton = styled.button`
    background-color: transparent;
    border: 2px solid white;
    padding: 20px 50px;
    font-size: 2vmin;
    font-weight: bold;
    width: 70%;
    color: white;
    display: flex;
    gap: 15px;
    position: relative;
    transition: 0.3s;
    cursor: pointer;

    > span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
    }

    &:after {
            position: absolute;
            transition: 0.3s;
            content: '';
            bottom: 0;
            right: 0;
            width: 0%;
            height: 100%;
            background-color: white;

        }

    &:hover {

        color: black;

        &:after {
            position: absolute;
            content: '';
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background-color: white;
        }
    }
`

export const Bar2 = styled.div`
    width: 100%;
`
export const LinkTo = styled.a`
    color: white;
`

export const RollButton = styled.button`
    background-color: #a8dadc;
    border: 0;
    padding: 20px 60px;
    color: white;
    font-size: 2vmax;
    font-weight: bold;
`

export const QuoteL = styled(RiDoubleQuotesL)`
    position: absolute;
    top: -4vw;
    left: -4vw;
    font-size: 5vmax;
    color: #e63946;
`

export const QuoteR = styled(RiDoubleQuotesR)`
    position: absolute;
    bottom: -4vw;
    right: -4vw;
    font-size: 5vmax;
    color: #e63946;
`
export const BackIcon = styled(RiArrowGoBackFill)``

