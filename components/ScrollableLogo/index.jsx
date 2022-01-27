import styled from 'styled-components'
import LogoSVG from '../../public/svg/scrollablelogo.svg'

const Logo = styled(LogoSVG)`
    display: none;
    @media only screen and (min-width: 768px) {
        display: inline;
        position: absolute;
        top: 30px;
        left: 60px;
    }
`

export default function ScrollableLogo() {
    return (
        <>
            <Logo />
        </>
    )
}