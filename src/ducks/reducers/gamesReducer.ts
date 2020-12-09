import { GamesState, FetchGames } from '../types'

const initialState: GamesState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
}

export const gamesReducer = (state = initialState, action: FetchGames): GamesState => {
  switch (action.type) {
    case 'FETCH_GAMES':
      return { ...state, ...action.payload }
    default:
      return state
  }
}
