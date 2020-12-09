import Axios from 'axios'
import { Dispatch } from 'react'
import { gameDetailsUrl, gameScreenshotUrl } from '../../utils/api'
import { FetchedSingleGameData, FetchedScreenshots, SingleGame } from '../types'

export const fetchDetailedGame = (game_id: number) => async (dispatch: Dispatch<SingleGame>) => {
  const gameDetails = await Axios.get<FetchedSingleGameData>(gameDetailsUrl(game_id))
  const gameScreenshots = await Axios.get<FetchedScreenshots>(gameScreenshotUrl(game_id))

  dispatch({
    type: 'LOADING_DETAILS',
  })

  dispatch({
    type: 'FETCH_SINGLE_GAME',
    payload: {
      details: gameDetails.data,
      screenshots: gameScreenshots.data.results,
    },
  })
}
