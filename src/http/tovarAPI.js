import { $authHost, $host } from ".";
import jwt_decode from 'jwt-decode'

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data
}

export const createTovar = async (tovar) => {
    const {data} = await $authHost.post('api/tovar', tovar)
    return data
}

export const fetchTovars = async (typeId, brandId, page, limit = 8) => {
    const {data} = await $host.get('api/tovar', {params: {
        typeId, brandId, page, limit
    }})
    return data
}

export const fetchOneTovar = async (id) => {
    const {data} = await $host.get('api/tovar/' + id)
    return data
}