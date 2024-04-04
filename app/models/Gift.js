

export class Gift {
    constructor(data) {
        this.tag = data.tag
        this.url = data.url
        this.opened = data.opened
        this.creatorId = data.creatorId
        this.id = data.id
        this.profileIdsOpened = [data.profileIdsOpened]
    }

    get GiftDisplayTemplate() {
        return `
        <div class="col-4">
                    <div onclick="app.GiftsController.OpenGift('${this.id}')" class="card p-1 shadow">
                        <img class="p-1" src="${this.url}"
                            alt="" class="card-img">
                        <div class="card-text text-center py-1">${this.tag}</div>
                    </div>
                </div>
        `
    }
}