type CityType = {
    title:string
    countryTitle:string
}
type AddressType = {
    streetTitle: string
    city:CityType
}
type TechType = {
    id:number
    title:string
}
type StudentType = {
    name: string
    age: number
    isActive: boolean
    address:AddressType
    technologies:TechType[]
}

export const student:StudentType = {
    name: 'Artem',
    age: 32,
    isActive: false,
    address: {
        streetTitle: 'Mira 2',
        city: {
            title: 'Moscow',
            countryTitle: 'Russia'
        },
    },
    technologies: [
        {
            id: 1,
            title: 'html'
        },
        {
            id: 2,
            title: 'css'
        },        {
            id: 3,
            title: 'react'
        },
    ]
}

// console.log(student.age);
// console.log(student.address.city.title)
// console.log(student.technologies[0].title)
