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