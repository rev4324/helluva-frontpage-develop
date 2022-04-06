import styled from 'styled-components'

const MainBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

export default function MainBox(props) {
    return (
        <MainBoxStyled props={props}>
            {props.children}
        </MainBoxStyled>
    )
}