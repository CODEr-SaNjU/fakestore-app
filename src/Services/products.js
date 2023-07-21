import axios from "axios"

export const getProducts = async () => {
    const products = await axios.get('https://fakestoreapi.com/products?limit=10')
    return products
}