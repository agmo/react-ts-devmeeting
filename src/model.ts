interface ILocation {
    street: string,
    city: string,
    state: string,
    postcode: string
}

interface IName {
    first: string,
    last: string
}

interface IPicture {
    large?: string,
    medium?: string,
    thumbnail?: string
}

export interface IContact {
    id: number,
    name: IName,
    phone: string,
    email: string,
    location: ILocation,
    picture: IPicture
}
