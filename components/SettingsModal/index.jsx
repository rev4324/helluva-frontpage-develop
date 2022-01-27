import styled from "styled-components";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { IconContext } from "react-icons/lib";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
    height: 70%;
`

const Close = styled(motion.button)`
    position: fixed;
    right: 40px;
    bottom: 40px;
    color: #000;
    background: transparent;
    border: none;
    .icon {
        cursor: pointer;
        :hover {
            color: #d30f54;
        }
    }
    
    `

const Header = styled.h1`
    font-size: 64px;
    line-height: 77px;
    letter-spacing: -0.04em;
    text-align: left;
    `

const Switcher = styled(motion.button)`
    width: 250px;
    cursor: pointer;
    height: 300px;
    padding: 35px;
    padding-bottom: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    border-radius: 15px;
    border: 1px solid #777777;
    h3 {
        font-family: Inter;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        letter-spacing: -0.045em;
        text-align: left;
        margin: 0;
        margin-bottom: 10px;
    }
    p {
        font-family: Inter;
        font-weight: 700;
        margin: 0;
    }
    .mode {
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 29px;
        letter-spacing: -0.045em;
    }
    /* :hover {
        background-color: #d30f541d;
        color: #d30f54;
        border-color: #d30f54;
    } */
`

export default function SettingsModal({ toggleSettings, theme, setTheme }) {
    const toggleTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light")
    }
    return (
        <IconContext.Provider value={{size: '34px'}}>
            <Container>
                <Close
                    whileHover={{ color: '#d30f54', scale: 1.05 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ type: 'spring', duration: 0.3 }} 
                    exit="exit"
                >
                    <MdClose onClick={toggleSettings} className="icon" />
                </Close>
                <Header>Settings</Header>
                <Switcher
                    onClick={toggleTheme}
                    whileHover={{ scale: 1.05, color: '#d30f54', borderColor: '#d30f54' }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ type: 'spring', duration: 0.3 }}
                >
                    <h3>Dark Mode</h3>
                    <p>Status</p>
                    {theme === "light" ? 
                    <p className="mode">Disabled</p> :
                    <p className="mode">Enabled</p>
                }
                </Switcher>
            </Container>
        </IconContext.Provider>
    )
}