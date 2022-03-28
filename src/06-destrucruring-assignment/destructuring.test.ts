import {ManType} from "./Destructuring";

let props: ManType;
beforeEach(() => {
    props = {
        name: 'Artem',
        age: 34,
        lessons: [{title: '1'}, {title: '2'}, {title: '3'}],
        address: {
            street: {
                title: 'Moscow street',
            }
        }
    }
})

test('destructuring object', () => {

    const {name, age, lessons} = props;
    const {title} = props.address.street;

    expect(lessons[1].title).toBe('2')
    expect(name).toBe('Artem')
    expect(age).toBe(34);
    expect(lessons.length).toBe(3);

    expect(title).toBe('Moscow street');
})

test('test2', () => {

})

test('destructuring array', () => {
    const [l1, l2 ] = props.lessons;

    const [ls1, ...restLessons] = props.lessons;


    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    expect(restLessons.length).toBe(2)
    expect(restLessons[0].title).toBe('2')

})