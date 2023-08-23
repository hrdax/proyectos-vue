import { API_URL, PRODUCTS } from "../utils/constants"


export function addProductCartApi(idProduct) {
    const products = getCartApi()
    products.push(idProduct)

    localStorage.setItem(PRODUCTS, JSON.stringify(products))
}

export function getCartApi() {
    const products = localStorage.getItem(PRODUCTS)

    if (!products) return []

    return JSON.parse(products)
}

export async function getProductsCartApi(){
    const idProducts = getCartApi()

    if(idProducts.length === 0) return null

    try {
        const products = []

        for await (const idProduct of idProducts) {
            const response = await fetch(`${API_URL}/api/productos/${idProduct}`)
            const result = await response.json()
            products.push(result)
        }

        console.log(products)
    } catch (error) {
        console.log(error)
        return null
    }
}