// Fetch games
export interface GamesPayload {
  id: number
  name: string
  released: string
  background_image: string
}

export interface GamesState {
  popular: GamesPayload[]
  newGames: GamesPayload[]
  upcoming: GamesPayload[]
  searched: GamesPayload[]
}

export interface FetchGames {
  type: 'FETCH_GAMES'
  payload: {
    popular: GamesPayload[]
    upcoming: GamesPayload[]
    newGames: GamesPayload[]
  }
}

// Fetch Single Game
export interface DetailsState {
  details: FetchedSingleGameData | null
  screenshots: ScreenShots[]
  isLoading: boolean
}

export interface FetchedSingleGameData {
  id: number
  name: string
  background_image: string
  released: string
  rating: number
  description: string
  platforms: {
    platform: {
      id: number
      name: string
      image_background: string
    }
  }[]
}

export interface ScreenShots {
  id: number
  image: string
  is_deleted: boolean
}

export interface FetchedScreenshots {
  results: {
    id: number
    image: string
    is_deleted: boolean
  }[]
}

export interface SingleGame {
  type: 'FETCH_SINGLE_GAME' | 'LOADING_DETAILS'
  payload?: {
    details: FetchedSingleGameData
    screenshots: ScreenShots[]
  }
}
