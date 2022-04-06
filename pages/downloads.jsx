import styled from 'styled-components'
import MainBox from '../components/MainBox'
import Box from '../components/Box'

const MainBoxCustom = styled(MainBox)`
    justify-content: center;
`

const BoxCustom = styled(Box)`
    justify-content: center;
`

const SoonTM = styled.p`
    font-size: 3em;
    font-weight: 800;
`

export default function Downloads() {
    return (
        <MainBoxCustom style={{height: "1000px"}}>
            <BoxCustom>
                <SoonTM>Coming soon.</SoonTM>
            </BoxCustom>
        </MainBoxCustom>
    )
}