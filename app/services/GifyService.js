import { Gift } from "../models/Gift.js";
import { setHTML } from "../utils/Writer.js";

export const giphyApi = axios.create({
    baseURL: 'http://api.giphy.com/v1/gifs/',
    timeout: 8000,
    params: {
        api_key: 'BswkG6gnTV183tYvyJpyH4NmUALx5W3a',
        rating: 'pg',
        limit: 10,
    }
});

class GifyService {
    async Search(gifSearch) {
        const result = await giphyApi.get('search', {
            params: {
                q: gifSearch
            }
        });

        console.log(result)
        let gifHTML = ''

        const gifData = result.data.data.map(g => g.images.downsized_large.url);
        gifData.forEach(gif => gifHTML += Gift.GifTemplate(gif))
        setHTML('gif-section', gifHTML)
    }

}

export const gifyService = new GifyService