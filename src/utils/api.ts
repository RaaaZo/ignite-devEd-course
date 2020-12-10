// Base url
const base_url = 'https://api.rawg.io/api/'

// Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1

  if (month < 10) {
    return `0${month}`
  }

  return month
}

const getCurrentDay = () => {
  const day = new Date().getDate() + 1

  if (day < 10) {
    return `0${day}`
  }

  return day
}

const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYearDate = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYearDate = `${currentYear + 1}-${currentMonth}-${currentDay}`

// Popular games
const popular_games = `games?dates=${lastYearDate},${currentDate}&ordering=-rating&page_size=10`
const upcoming_games = `games?dates=${currentDate},${nextYearDate}&ordering=-added&page_size=10`
const new_games = `games?dates=${lastYearDate},${currentDate}&ordering=-released&page_size=10`

export const popularGamesUrl = () => `${base_url}${popular_games}`
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`
export const newGamesUrl = () => `${base_url}${new_games}`

// Game details
export const gameDetailsUrl = (game_id: number) => `${base_url}games/${game_id}`
export const gameScreenshotUrl = (game_id: number) => `${base_url}games/${game_id}/screenshots`

// Search game
export const searchGameUrl = (game_name: string) =>
  `${base_url}games?search=${game_name}&page_size=9`
