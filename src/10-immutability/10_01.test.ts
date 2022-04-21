import {
    UserWithLaptopType,
    moveUser,
    upgradeUserLaptop,
    UserWithBooksType,
    moveUserToOtherHouse,
    addNewBooksToUser,
    updateBook,
    removeBook, WithCompaniesType, addNewCompany, updateCompany, updateCompanyTitle2,

} from "./10_01";

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Misnk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const  movedUser = moveUser(user, 'Kiev')


    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')
})

test('upgrade laptop to MacBook', () => {
    let user: UserWithLaptopType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const  userCopy = upgradeUserLaptop(user, 'MacBook Pro')


    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('MacBook Pro')
    expect(user.laptop.title).toBe('ZenBook')
})

test('upgrade house', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['Anna Karenina', 'Crime and Punishment', "The Master and Margarita"]
    }

    const  userCopy = moveUserToOtherHouse(user, 99)


    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(99)
})

test('add new book to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const  userCopy = addNewBooksToUser(user, 'ts')


    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books.length).toBe(5)
    expect(userCopy.books[4]).toBe('ts')
})

test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const  userCopy = updateBook(user, 'js', 'ts')


    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books.length).toBe(4)
    expect(userCopy.books[2]).toBe('ts')
})

test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const  userCopy = removeBook(user, 'js')


    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books.length).toBe(3)
    expect(userCopy.books[2]).not.toBe('ts')
})

test('add new company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [
            {id: 1, title: 'Epam'},
            {id: 2, title: 'IT-INCUBATOR'}
        ]
    }

    const userCopy = addNewCompany(user, {id: 3, title: 'Google'})

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[2].title).toBe('Google')
})

test('update company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [
            {id: 1, title: 'Epam'},
            {id: 2, title: 'IT-INCUBATOR'}
        ]
    }

    const userCopy = updateCompany(user, 1, 'OZON')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('OZON')
})

test('update company in associative array', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
    }
    let companies = {
        'Dimych': [{id: 1, title: 'Epam'}, {id: 2, title: 'IT-INCUBATOR'}],
        'Artem': [{id: 1, title: 'IT-INCUBATOR'}]
    };

    let companyCopy = {...companies}

    const copy = updateCompanyTitle2(
        companies, 'Dimych', 1, 'EPAM')

    expect(copy['Dimych']).not.toBe(companies['Dimych'])
    expect(copy['Artem']).toBe(companies['Artem'])
    expect(copy['Dimych'][0].title).toBe('EPAM')
})
