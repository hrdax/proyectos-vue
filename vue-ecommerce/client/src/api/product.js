import { API_URL } from "../utils/constants";

export async function getProductsApi(limit = 1000) {
    try {
        const response = await fetch(`${API_URL}api/productos?_sort=created_at:desc&_limit=${limit}`)
        const result = await response.json()
        return result
    } catch (error) {
        console.log(error)
        return null
    }
}