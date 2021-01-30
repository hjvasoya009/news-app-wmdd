import axios from 'axios';

import { API_KEY, BASE_URL } from '../config/apiConfig';

export const getArticles = async () => {
    const url = BASE_URL
    try {
        const response = await axios.get(url, {
            params: {
                sources: source,
                apiKey: API_KEY
            }
        })
        const article = response.data.articles
        return articles
    } catch (error) {
        throw error
    }
}   