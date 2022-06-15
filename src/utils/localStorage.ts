export const API_KEY = '9715d34ff97455ceb2e99a32fc05a717'
export const SMALL_IMAGE = (id) => `https://www.themoviedb.org/t/p/w220_and_h330_face${id}`
export const LIST_OF_TV = [
    "movie/popular",
    "tv/popular",
    "movie/upcoming",
    "tv/on_the_air",
]
export const FILM_URL = (type) => `https://api.themoviedb.org/3/${type}?api_key=${API_KEY}&language=en-US&page=1`
export const SEARCH_QUERY = (type, query) => `https://api.themoviedb.org/3/search/${type}?api_key=9715d34ff97455ceb2e99a32fc05a717&language=en-US&query=${query}&page=1&include_adult=false`
export const DEFAULT_BP = 'https://wallpaperaccess.com/full/1766995.jpg'
export const DETAIL_BACK_PATH = [
    'https://wallpaperaccess.com/full/1265723.jpg',
    'https://wallpaperaccess.com/full/1220763.jpg',
    'https://wallpaperaccess.com/full/239141.jpg',
    'https://wallpaperaccess.com/full/1766995.jpg',
    'https://wallpaperaccess.com/full/1767158.jpg',
    'https://wallpaperaccess.com/full/1767151.jpg',
    'https://wallpaperaccess.com/full/1265811.jpg',
    'https://wallpaperaccess.com/full/1767147.jpg'
]
export const HOME_BG = "https://w0.peakpx.com/wallpaper/715/270/HD-wallpaper-deadpool-black-red.jpg"
export const NO_RESULT = "There are no movies that matched your query."
export const OVERVİEW_NULL = "We don't have an overview translated in English. Help us expand our database by adding one."
export const THEME_LIGHT = ['#EE3333', '#F26565', '#D90F0F']
export const THEME_DARK = ['#080808', '#161515', '#3A3A3A']
export const THEME_BLOOD = ['#A51F1F', '#E34747', '#A82929']
export const TEXT_THEME_LIGHT = 'white'
export const TEXT_THEME_DARK = '#161515'
export const TEXT_THEME_BLOOD = '#A82929'