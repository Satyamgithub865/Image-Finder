import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY;
const URL = process.env.REACT_APP_URL;

export const getImages = async (text, count) => {
    try {
        return await axios.get(`${URL}/?key=${API_KEY}&q=${text}&image_type=photo&per_page=${count}&safe_search=true`)
    } catch (error) {
        console.log('error while calling API : ', error.message);
    }
}