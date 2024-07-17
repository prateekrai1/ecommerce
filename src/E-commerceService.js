import axios  from 'axios'
 
const apiClient = axios.create({
    baseURL: 'http://localhost:9090',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
        'Access-Control-Allow-Credentials': 'true'
    }
})

export const retrieveAllProducts = () => apiClient.get('/products/allProducts');
