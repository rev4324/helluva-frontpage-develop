import styled from "styled-components";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { IconContext } from "react-icons/lib";
import { useTheme } from "next-themes";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
    height: 70%;
    .mode-comment {
        margin-top: 5px;
        margin-bottom: 60px;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 29px;
        letter-spacing: -0.04em;
        text-align: left;
    }
`

const Close = styled(motion.button)`
    position: fixed;
    right: 40px;
    bottom: 40px;
    color: var(--foreground-main);
    background: transparent;
    border: none;
    cursor: pointer;
`

const Header = styled.h1`
    font-size: 64px;
    line-height: 77px;
    letter-spacing: -0.04em;
    text-align: left;
    color: var(--foreground-main);
    margin-bottom: 0;
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
    border: 1px solid var(--foreground-borders);
    background-color: var(--background-transparent);
    * {
        color: var(--foreground-main)
    }
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
`

export default function SettingsModal({ toggleSettings, getTheme }) {
    const { theme, setTheme } = useTheme();
    const toggleTheme = () => {
        console.log("1: ", theme)
        theme === "light" ? setTheme("dark") : setTheme("light")
        console.log("2: ", theme)
    }
    return (
        <IconContext.Provider value={{size: '34px'}}>
            <Container>
                <Close
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale : 0.99 }}
                    transition={{ type: 'spring', duration: 0.3 }}
                >
                    <MdClose onClick={toggleSettings} className="icon" />
                </Close>
                <Header>Settings</Header>
                {theme === "light" ? 
                    <p className="mode-comment">Need some lamp toggle?</p> :
                    <p className="mode-comment">Ya’ already edgy.</p>
                }
                <Switcher
                    onClick={toggleTheme}
                    whileHover={{ scale: 1.05 }}
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