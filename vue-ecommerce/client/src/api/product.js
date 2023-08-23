import { API_URL } from "../utils/constants";

export async function getProductsApi(limit = 1000) {
    try {
        const response = await fetch(`${API_URL}/api/productos?_sort=created_at:desc&_limit=${limit}&populate=image,category`)
        const result = await response.json()
        return result
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function getProductsCategory(category) {
    try {
        const response = await fetch(
            `${API_URL}/api/productos?fields=name,price&populate=image,category&filters[category][slug][$eq]=${category}`)
        const result = await response.json()
        return result
    } catch (error) {
        console.log(error)
        return null
    }
}