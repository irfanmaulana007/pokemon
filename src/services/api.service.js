import axios from 'axios'
import { API_URL } from './config'

axios.defaults.baseURL = API_URL


const apiService = {
	get (resource) {
		return axios
			.get(API_URL + resource)
	},

	put (resource, params) {
		return axios
			.put(API_URL + resource, params)
	},

	post (resource, params) {
		return axios
			.post(API_URL + resource, params)
	},

	delete (resource) {
		return axios
			.delete(API_URL + resource)
	}
}

export const pokemonService = {
    list () {
        return apiService
                .get('pokemon')
    },
    
    detail (url) {
        return axios
                .get(url)
    }
}