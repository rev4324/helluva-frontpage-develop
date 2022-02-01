import { useState } from 'react'
import styled from 'styled-components'
import { Data } from './Data'
import { IconContext } from 'react-icons/lib'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { motion, AnimatePresence } from 'framer-motion'

const AccordionSect = styled(motion.ul)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid var(--foreground-borders);
    border-radius: 10px;
    margin-bottom: 50px;
    max-width: 800px;
    padding: 0;
`

const Row = styled(motion.li)`
    border-bottom: 1px solid var(--foreground-borders);
    display: flex;
    flex-direction: column;
    background: transparent;
    user-select: none;
    padding-inline: 20px;
    word-wrap: break-word;
    font-family: 'Inter';
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: -0.035em;
    :last-child {
        border-bottom: 0;
    }
    h3 {
        color: var(--foreground-faded);
    }
    p {
        margin-top: 0;
        user-select: text;
        font-weight: 400;
    }
    .icon {
        /* margin-right: 10px; */
        color: var(--foreground-faded);
    }
    .iconContainer {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const Question = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`

const variants = {
    open: {
        opacity: 1,
        height: "auto",
    },
    closed: {
        opacity: 0,
        height: 0,
    }
}

export default function Accordion(props) {
    const [click, setClick] = useState(false)
    const opener = row => {
        if (click === row) {
            return setClick(null)
        } else {
            setClick(row)
        }
    }
    return (
        <IconContext.Provider value={{ size: '32px' }}>
            <AccordionSect layout transition={{ type: 'spring', duration: 0.3 }}>
                {Data.map((elem, index) => {
                    return (
                        <Row layout key={elem.question} transition={{ type: 'spring', duration: 0.3 }} animate={{ y: 0 }}>
                            <Question onClick={() => opener(index)} key={index} layout transition={{ type: 'spring', duration: 0.3 }}>
                                <h3 style={click === index ? { color: 'var(--foreground-main)' } : null}>
                                    <elem.question />
                                </h3>
                                <motion.span
                                    className='iconContainer'
                                    initial={{ rotateZ: 0 }}
                                    animate={click === index ? { rotateZ: 180 } : { rotateZ: 0 }}
                                    transition={{ type: 'spring', duration: 0.3 }}
                                >
                                    <MdKeyboardArrowUp
                                        className='icon'
                                        style={click === index ? { color: 'var(--foreground-main)' } : null}
                                    />
                                </motion.span>
                            </Question>
                            {click === index ?
                                <motion.p layout initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }}>
                                    <elem.answer />
                                </motion.p>
                                : null}
                        </Row>
                    )
                })}
            </AccordionSect>
        </IconContext.Provider>
    )
}