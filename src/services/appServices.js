import { BASE_URL } from "../constants"
import { useHttp } from "../hooks/http.hook"

export const useAppServices = () => {


const {request,error} = useHttp()
    const getCategories =  () => {      
        return request(`${BASE_URL}/categories`)   
    }

    return {getCategories,error}
}