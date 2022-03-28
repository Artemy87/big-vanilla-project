export type ManType = {
    name:string
    age:number
}

const people: ManType[] = [
    {name: 'Andrey', age: 33},
    {name: 'Denis', age: 24},
    {name: 'Dmitry', age: 18}
]

const dimychTransformator = (man:ManType) => ({
        stack: ["css, html", "js", "tdd", 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
})

const devs = [
    {
        stack: ['JS', 'CSS', 'REACT'],
        firstName: 'Andrey', lastName: 'Ivanov'
    },
    {
        stack: ['JS', 'CSS', 'REACT'],
        firstName: 'Denis', lastName: 'Petrov'
    },
    {
        stack: ['JS', 'CSS', 'REACT'],
        firstName: 'Dmitry', lastName: 'Denisov'
    }
]

const devs3 = people.map(man => dimychTransformator(man));

const devs4 = people.map(man => ({
        stack: ["css, html", "js", "tdd", 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    }
))

const messages = people.map(
    man => `Hello ${man.name.split(' ')[0]}. Welcome to IT-Incubator`
)
