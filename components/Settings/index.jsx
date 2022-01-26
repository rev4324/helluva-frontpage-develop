import { IconContext } from 'react-icons/lib'
import { MdOutlineSettings } from 'react-icons/md'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import SettingsModal from '../SettingsModal'
import { useState } from 'react'

const SettingsIcon = styled(motion.button)`
    @media only screen and (max-width: 768px) {
        display: none;
    }
    position: fixed;
    right: 40px;
    bottom: 40px;
    border: none;
    background: transparent;
    *:hover {
        cursor: pointer;
        color: #d30f54;
    }
`

const Backdrop = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    right: 0px;
    bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fffffff6;
    @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
        background-color: #ffffffbd;
        backdrop-filter: blur(20px);
    }
`

export default function Settings() {
    const [clicked, setClicked] = useState(false);
    const toggleSettings = () => {
        setClicked(prev => !prev)
    }
    return (
        <IconContext.Provider value={{size: '34px'}}>
            <SettingsIcon>
                <MdOutlineSettings onClick={toggleSettings} />
            </SettingsIcon>
            {clicked &&
                <Backdrop>
                    <SettingsModal toggleSettings={toggleSettings} />
                </Backdrop>
            }
        </IconContext.Provider>
)}