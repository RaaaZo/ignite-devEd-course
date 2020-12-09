import axios from 'axios'
import { Dispatch } from 'redux'
import { newGamesUrl, popularGamesUrl, upcomingGamesUrl } from '../../utils/api'
import { FetchGames } from '../types'

interface FetchedGamesData {
  results: {
    id: number
    name: string
    background_image: string
    released: string
  }[]
}

export const fetchGames = () => async (dispatch: Dispatch<FetchGames>) => {
  const popularGames = await axios.get<FetchedGamesData>(popularGamesUrl())
  const upcomingGames = await axios.get<FetchedGamesData>(upcomingGamesUrl())
  const newGames = await axios.get<FetchedGamesData>(newGamesUrl())

  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popular: popularGames.data.results,
      upcoming: upcomingGames.data.results,
      newGames: newGames.data.results,
    },
  })
}
