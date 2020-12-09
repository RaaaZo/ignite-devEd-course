import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { DetailsState, GamesState } from '../types'
import { gamesReducer } from '../reducers/gamesReducer'
import { gameDetailsReducer } from '../reducers/gameDetailsReducer'

export interface StoreState {
  games: GamesState
  gameDetails: DetailsState
}

const rootReducer = combineReducers<StoreState>({
  games: gamesReducer,
  gameDetails: gameDetailsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
