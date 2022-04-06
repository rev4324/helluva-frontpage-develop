import styled from "styled-components";

const StyledBox = styled.main`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  margin-top: 20%;
  margin-bottom: 50px;
  @media only screen and (min-width: 768px) {
    margin-top: 60px;
    width: 60%;
  }
  .header {
    @media only screen and (min-width: 768px) {
      font-size: 3rem;
      line-height: 58px;
    }
    font-size: 2rem;
    margin: 0 0 40px 0;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -0.06em;
    text-align: center;
    padding-bottom: 10px;
  }
  .distort {
    height: 40px;
    margin: 0;
    padding: 0;
    position: relative;
    top: 10px;
  }
`

export default function Box(props) {
    return (
        <StyledBox props={props}>
            {props.children}
        </StyledBox>
    )
}