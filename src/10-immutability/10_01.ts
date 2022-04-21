import exp from "constants";

export type UserType = {
    name: string
    hair: number
    address: {city: string, house: 12}
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: string[]
}

type CompanyType = {id: number, title: string}
export type WithCompaniesType = {
    companies: Array<CompanyType>
}

export function makeHairstyle(u: UserType, power: number) {
    return { ...u, hair: u.hair / power }
    //copy.hair = u.hair / power
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: { ...u.address, city: city }
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house }
    }
}

export function upgradeUserLaptop(u: UserWithLaptopType, title: string) {
    return {
        ...u,
        laptop: {...u.laptop, title: title}
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBook: string) {
    return {
        ...u,
        books: [...u.books, newBook]
    }
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBooks: string) {
    return {
        ...u,
        books: u.books.map(book => book === oldBook ? newBooks : book)
    }
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, bookForDelete: string) {
    return {
        ...u,
        books: u.books.filter(book => book !== bookForDelete)
    }
}

export function addNewCompany(u: UserWithLaptopType & WithCompaniesType, newCompany: {id:number, title:string}) {
    return {
        ...u,
        companies: [...u.companies, newCompany]
    }
}

export function updateCompany(u: UserWithLaptopType & WithCompaniesType, idx: number, newTitle: string) {
    return {
        ...u,
        companies: u.companies.map(
            el => el.id === idx ? {...el, title: newTitle} : el)
    }
}

export function updateCompanyTitle2 (companies: {[key: string]: Array<CompanyType>},
                                     userName: string,
                                     companyIDX: number,
                                     newTitle: string) {

    let companyCopies = {...companies}

    companyCopies[userName] = companyCopies[userName].map(
            el => el.id === companyIDX ? {...el, title: newTitle} : el)

    return companyCopies;
}