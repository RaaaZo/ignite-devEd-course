import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchGames } from '../ducks/actions/gamesActions'
import { StoreState } from '../ducks/store/store'

// Styles
import styled from 'styled-components'
import { motion } from 'framer-motion'

// Components
import Game from '../components/Game'
import Detail from '../components/Detail'

const Home: React.FC<{}> = () => {
  const location = useLocation()

  const pathId = location.pathname.split('/')[2]

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGames())
  }, [dispatch])

  const { newGames, popular, upcoming } = useSelector((state: StoreState) => state.games)

  return (
    <GameList>
      {pathId && <Detail />}

      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map(({ id, background_image, name, released }) => (
          <Game key={id} id={id} image={background_image} name={name} released={released} />
        ))}
      </Games>

      <h2>Popular Games</h2>
      <Games>
        {popular.map(({ id, background_image, name, released }) => (
          <Game key={id} id={id} image={background_image} name={name} released={released} />
        ))}
      </Games>

      <h2>New Games</h2>
      <Games>
        {newGames.map(({ id, background_image, name, released }) => (
          <Game key={id} id={id} image={background_image} name={name} released={released} />
        ))}
      </Games>
    </GameList>
  )
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;

  h2 {
    padding: 5rem 0;
  }
`

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`

export default Home
