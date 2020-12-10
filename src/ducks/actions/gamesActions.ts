import axios from 'axios'
import { Dispatch } from 'redux'
import { newGamesUrl, popularGamesUrl, searchGameUrl, upcomingGamesUrl } from '../../utils/api'
import { ClearSearched, FetchGames, FetchSearchedGames } from '../types'

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

export const fetchSearchGames = (game_name: string) => async (
  dispatch: Dispatch<FetchSearchedGames>
) => {
  const searchGames = await axios.get<FetchedGamesData>(searchGameUrl(game_name))

  dispatch({
    type: 'FETCH_SEARCH_GAMES',
    payload: {
      searched: searchGames.data.results,
    },
  })
}

export const clearSearchedGames = (): ClearSearched => {
  return {
    type: 'CLEAR_SEARCHED',
  }
}
