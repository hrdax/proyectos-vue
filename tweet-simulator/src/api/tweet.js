import { v4 as uuidv4 } from 'uuid'
import { TWEETS } from '../utils/constants'

export function saveTweetApi(tweet, username) {
    const tweetTemp = {
        id: uuidv4(),
        tweet,
        username,
        createdAt: new Date()
    }
    console.log(tweetTemp)
    localStorage.setItem(TWEETS, JSON.stringify(tweetTemp))
}
