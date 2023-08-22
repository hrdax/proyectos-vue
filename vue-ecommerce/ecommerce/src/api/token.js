import { TOKEN } from '../utils/constants'

export function setTokenApi(token) {
    localStorage.setItem(TOKEN, token)
}

export function getTokenApi() {
    return localStorage.getItem(TOKEN)
}