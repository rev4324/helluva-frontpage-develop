import styled from 'styled-components'
import LogoSVG from '../../public/svg/scrollablelogo.svg'
import LogoSVGdark from '../../public/svg/scrollablelogodark.svg'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const Logo = styled(LogoSVG)`
    display: none;
    z-index: 1001;
    @media only screen and (min-width: 768px) {
        display: inline;
        position: absolute;
        top: 30px;
        left: 60px;
    }
`
const LogoDark = styled(LogoSVGdark)`
    display: none;
    z-index: 1001;
    @media only screen and (min-width: 768px) {
        display: inline;
        position: absolute;
        top: 30px;
        left: 60px;
    }
`

const ScrollableLogo = () => {
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme } = useTheme();
    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <> {resolvedTheme === 'light' ?
            <Logo /> :
            <LogoDark />}
        </>
    )
}

export default ScrollableLogo