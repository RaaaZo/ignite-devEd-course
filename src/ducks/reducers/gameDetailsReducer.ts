import { DetailsState, SingleGame } from '../types'

const initialState: DetailsState = {
  details: null,
  screenshots: [],
  isLoading: false,
}

export const gameDetailsReducer = (state = initialState, action: SingleGame) => {
  switch (action.type) {
    case 'FETCH_SINGLE_GAME':
      return { ...state, ...action.payload, isLoading: false }

    case 'LOADING_DETAILS':
      return { ...state, isLoading: true }
    default:
      return state
  }
}
