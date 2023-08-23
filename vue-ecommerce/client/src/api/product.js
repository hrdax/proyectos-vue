import { API_URL } from "../utils/constants";

export async function getProducts(limits = 1000) {
    try {
        const response = await fetch(`${API_URL}api/products?_sort=created_at:desc&_limit=${limits}`)
        const result = await response.json()
        return result
    } catch (error) {
        console.log(error)
        return null
    }
}