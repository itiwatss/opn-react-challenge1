export interface StoreStateType {
    donate : number,
    message : string
}

export enum ActionType {
    UPDATE_TOTAL_DONATE = 'UPDATE_TOTAL_DONATE',
    UPDATE_MESSAGE = 'UPDATE_MESSAGE'
}

export interface ActionStoreType {
    amount : number,
    message : string,
    type: ActionType
}

export interface CharitiesType {
    id: number,
    name: string,
    image: string,
    currency: string
}

export interface PaymentType {
    id: number,
    charitiesId: number,
    amount: number,
    currency: string
}

