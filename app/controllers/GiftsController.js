import { AppState } from "../AppState.js"
import { giftsService } from "../services/GiftsService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"


export class GiftsController {
    constructor() {
        AppState.on("account", this.GetGifts)
        AppState.on("gifts", this.DrawGifts)
    }

    async GetGifts() {
        try {
            await giftsService.GetGifts()
        } catch (error) {
            console.log(error, "couldn't get gifts")
            Pop.toast(error, "error")
        }
    }

    DrawGifts() {
        let giftDisplayHTML = ''
        AppState.gifts.forEach(gift => giftDisplayHTML += gift.GiftDisplayTemplate)
        setHTML('gifts-display', giftDisplayHTML)
    }

    async OpenGift(giftId) {
        try {
            await giftsService.OpenGift(giftId)
        } catch (error) {
            console.log(error)
        }
    }

    async CreateGift() {
        event.preventDefault()
        const form = event.target
        const giftData = getFormData(form)
        console.log(giftData)
        await giftsService.CreateGift(giftData)
    }
}