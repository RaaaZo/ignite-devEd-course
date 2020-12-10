import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { clearSearchedGames, fetchSearchGames } from '../ducks/actions/gamesActions'
import logo from '../img/logo.svg'
import { fadeIn } from '../utils/Animations'

const Nav: React.FC<{}> = () => {
  const dispatch = useDispatch()

  const [textInput, setTextInput] = useState<string>('')

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value)
  }

  const submitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(fetchSearchGames(textInput))
    setTextInput('')
  }

  const clearSearched = () => {
    dispatch(clearSearchedGames())
  }

  return (
    <StyledNav variants={fadeIn} initial='hidden' animate='show'>
      <Logo onClick={clearSearched}>
        <img src={logo} alt='logo' />
        <h1>Ignite</h1>
      </Logo>
      <form onSubmit={submitSearch} className='search'>
        <input type='text' value={textInput} onChange={inputHandler} />
        <button type='submit'>Search</button>
      </form>
    </StyledNav>
  )
}

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;

  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgb(0, 0, 0, 0.2);
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
  }

  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background-color: #ff7676;
    color: white;
  }
`

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;

  img {
    height: 2rem;
    width: 2rem;
  }
`

export default Nav
