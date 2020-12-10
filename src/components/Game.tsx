import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { fetchDetailedGame } from '../ducks/actions/gameDetails'
import { Link } from 'react-router-dom'
import { resizeImage } from '../utils/resizeImages'
import { popup } from '../utils/Animations'

interface Props {
  id: number
  name: string
  released: string
  image: string
}

const Game: React.FC<Props> = ({ image, name, released, id }) => {
  const dispatch = useDispatch()

  const loadDetailHandler = () => {
    document.body.style.overflow = 'hidden'
    dispatch(fetchDetailedGame(id))
  }

  return (
    <StyledGame
      variants={popup}
      initial='hidden'
      animate='show'
      layoutId={id.toString()}
      onClick={loadDetailHandler}
    >
      <Link to={`/games/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${id.toString()}`}
          loading='lazy'
          src={resizeImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  )
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgb(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`

export default Game
