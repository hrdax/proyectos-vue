import { API_URL } from "../utils/constants";

export async function createOrderApi(data) {
    try {
        const url = `${API_URL}/api/orders`
        const params = {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }
        const response = await fetch(url, params)
        const result = await response.json()
        console.log(result)
        return result
    } catch (error) {
        console.log(error)
        return null
    }
}