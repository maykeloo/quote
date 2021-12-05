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

    @media screen and (max-width: 1200px)
    {
      width: 100%;
    }
`


export const Quotebar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1200px)
  {
    flex-direction: column;
    gap: 50px;
  }
`;

export const AuthorbarMobile = styled.div`
    display: none;

    @media screen and (max-width: 1200px)
    {
      display: flex;
      width: 100%;
    }
`
export const AuthorMobile = styled.span`
    color: white;
    transform-origin: right bottom;
    font-size: 3.5vmax;
    margin: 0;
    padding: 0;
    line-height: 1em;
    `

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

    
    @media screen and (max-width: 1200px)
    {
      display: none;
    }
`;

export const Buttonbar = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  margin-top: 10vh;

  @media screen and (max-width: 1200px)
  {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`;

export const RollbuttonBox = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

`;

export const PrevbuttonBox = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (max-width: 1200px)
  {
    width: 100%; 
    align-items: center;
  }
`;

export const Bar1 = styled.div`
    width: 100%;
    @media screen and (max-width: 1200px)
  {
    justify-content: center;
  }
`

export const PrevButton = styled.button`
    background-color: transparent;
    border: 0;  
    font-size: 2.5vmin;
    font-weight: bold;
    width: 80%;
    color: #457b9d;
    display: flex;
    justify-content: space-between;
    padding: 0;
    gap: 15px;
    position: relative;
    transition: 0.3s;
    cursor: pointer;

    @media screen and (max-width: 1200px)
  {
    justify-content: space-around;
  }



    &:hover {

        color: white;
        transform: translateY(-5px);
    }
`

export const Bar2 = styled.div`
    margin-top: 20px;
    width: 80%;
    display: flex;
    justify-content: space-between;
`
export const LinkTo = styled.a`
    color: white;
    font-size: 2vmin;
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

    @media screen and (max-width: 1200px)
  {
    top: -7vw;

  }
`

export const QuoteR = styled(RiDoubleQuotesR)`
    position: absolute;
    bottom: -4vw;
    right: -4vw;
    font-size: 5vmax;
    color: #e63946;
`
export const BackIcon = styled(RiArrowGoBackFill)``

export const Copy = styled.span`
    color: white;
    text-decoration: underline;
    cursor: pointer;
    font-size: 2vmin;
`

