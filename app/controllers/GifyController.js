import { gifyService } from "../services/GifyService.js"
import { getFormData } from "../utils/FormHandler.js"
import { setText } from "../utils/Writer.js"



export class GifyController {
    constructor() {

    }

    async Search() {
        event.preventDefault()
        const form = event.target
        const gifSearch = getFormData(form)

        await gifyService.Search(gifSearch.gifName)
    }

    InsertGifUrl(url) {
        console.log(url)
        let inputField = document.getElementById('url')
        inputField.value = url
    }
}