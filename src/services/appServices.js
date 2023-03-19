import { BASE_URL } from "../constants"
import { useHttp } from "../hooks/http.hook"

export const useAppServices = () => {


const {request,error,loading,succes} = useHttp()
 
    const postComands =  (body) => {   
        return request(`${BASE_URL}/comands`,"POST",body)   
    }
    const postMessageContacts = (body) => {
        return request(`${BASE_URL}/messages`,"POST",body)   
    }

    const getNews = () => {
        return request(`${BASE_URL}/news`)
    }
    const getNew = (id) => {
        return request(`${BASE_URL}/news/${id}`)
    }

    const getProduct = (id) => {
        return request(`${BASE_URL}/products/${id}`)
    }

    return {error,loading,succes,postComands,getNews,getNew,postMessageContacts,getProduct}
}