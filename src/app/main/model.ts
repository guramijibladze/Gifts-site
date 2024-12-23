export interface User {
    giftItemId:number,
    firstname:string,
    lastname:string,
    phoneNumber:string
}

export interface GiftedItemModel {
    id:number,
    imageBase64:string,
    startDate:string,
    endDate:string,
    winnerFirstName:string,
    winnerLastName:string,
    donor:string,
    donorLogoBase64:string,
    participantCount:number
}