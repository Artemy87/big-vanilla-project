

test('should get array of greeting messages', () => {

    const messages = people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to IT-Incubator`)
})