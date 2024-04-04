import { AppState } from '../AppState.js'
import { Gift } from '../models/Gift.js'
import { api } from './AxiosService.js'


class GiftsService {
    async GetGifts() {
        const response = await api.get('api/gifts')

        const gifts = response.data.map(gift => new Gift(gift))
        console.log(gifts)
        AppState.gifts = gifts
    }

    async OpenGift(giftId) {
        const openedGift = AppState.gifts.find(gift => gift.id == giftId)
        openedGift.opened = true
        const response = await api.put(`api/gifts/${giftId}`, openedGift)
        console.log(response)
        AppState.emit('gifts')
    }

    async CreateGift(giftData) {
        const response = await api.post('api/gifts', giftData)

        const gift = new Gift(giftData)
        AppState.gifts.push(gift)
    }
}

export const giftsService = new GiftsService