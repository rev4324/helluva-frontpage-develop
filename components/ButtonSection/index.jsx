import { FaTelegramPlane } from 'react-icons/fa'
import { AiFillGithub, AiFillGithub as GitHubIcon } from 'react-icons/ai'
import { MdOutlineForum as ForumIcon, MdOutlineForum } from 'react-icons/md'
import { IconContext } from 'react-icons'
import styled from 'styled-components'
import Breaking from '../../public/svg/bb1.svg'
import Bad from '../../public/svg/bb2.svg'

const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 100px;

`

const TelegramContainer = styled.div`
    .bad {
        position: relative;
        top: 9px;
        right: 25px;
    }
`

const TelegramButton = styled.button`
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  .link-telegram {
      background-color: var(--accent-main);
      color: #fff;
      font-family: Inter;
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: 46px;
      text-decoration: none;
      letter-spacing: -0.035em;
      text-align: left;
      padding-block: 10px;
      padding-inline: 20px;
      border-radius: 100px;
      border-top-left-radius: 20px;
  }
  .link-telegram:hover {
      background-color: #ff1365;
  }
`

const TelegramIcon = styled(FaTelegramPlane)`
    color: var(--accent-main);
    height: 50px;
    width: 50px;
    align-self: flex-start;
    margin-bottom: 10px;
`

const ButtonContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 900px) {
        flex-direction: column;
    }
`

const Button = styled.button`
    border: 1px solid var(--foreground-borders-faded);
    border-radius: 100px;
    margin-inline: 20px;
    margin-bottom: 10px;
    font-family: Inter;
    font-size: 1.5em;
    font-style: normal;
    font-weight: 700;
    line-height: 35px;
    letter-spacing: -0.035em;
    white-space: nowrap;
    text-align: center;
    padding: 7px;
    padding-inline: 30px;
    background: none;
    cursor: pointer;
    :hover {
        border-color: var(--accent-main)
    }
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--accent-main);
        text-decoration: none;
    }
    .icon {
        margin-right: 10px;
    }
`



export default function ButtonSection() {
    return (
        <Section>
            <TelegramButton>
                <TelegramIcon className='icon' />
                <TelegramContainer>
                    <a className='link-telegram' href='#'>Join the <Breaking className='distort' /></a>
                    <Bad className='bad'/>
                </TelegramContainer>
            </TelegramButton>
            <ButtonContainer>
                <Button>
                    <a href='https://github.com/hentaiOS' target='_blank' rel='noreferrer'>
                        <AiFillGithub className='icon' style={{ position: 'relative', bottom: '1px' }} />
                        GitHub
                    </a>
                </Button>
                <Button>
                    <a href='#' target='_blank' rel='noreferrer'>
                        <MdOutlineForum className='icon'/>
                        Community Forum
                    </a>
                </Button>
            </ButtonContainer>
        </Section>
    )
}