import { BASE_URL } from "../constants"
import { useHttp } from "../hooks/http.hook"

export const useAppServices = () => {


const {request,error} = useHttp()
    const getCategories =  () => {      
        return request(`${BASE_URL}/categories`)   
    }
    const postComands =  (data) => {   
        console.log(data)   
        return request(`${BASE_URL}/comands`,'POST',data)   
    }

    return {getCategories,error,postComands}
}