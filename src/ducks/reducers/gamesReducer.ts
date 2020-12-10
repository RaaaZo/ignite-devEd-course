import { GamesState, FetchGames, FetchSearchedGames, ClearSearched } from '../types'

type ActionTypes = FetchGames | FetchSearchedGames | ClearSearched

const initialState: GamesState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
}

export const gamesReducer = (state = initialState, action: ActionTypes): GamesState => {
  switch (action.type) {
    case 'FETCH_GAMES':
      return { ...state, ...action.payload }

    case 'FETCH_SEARCH_GAMES':
      return { ...state, ...action.payload }

    case 'CLEAR_SEARCHED':
      return { ...state, searched: [] }

    default:
      return state
  }
}
