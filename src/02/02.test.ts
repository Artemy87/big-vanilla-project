import {student} from "./02";
import exp from "constants";

test('', () => {
    let title = student.technologies[0].title;

    expect(title.length).toBe(4);
    expect(title).toBe('html')
    expect(title[0]).toBe('h')
    expect(title[1]).toBe('t')
    expect(title[2]).toBe('m')
    expect(title[3]).toBe('l')
})