import {FC} from "react";

export type ManType = {
    name: string
    age: number
    lessons: Array<{title: string}>
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title?: string
    man: ManType
}

export const ManComponent:FC<PropsType> = ({title, man: {name}}) => {


    return (
        <div>
            <h3>{title}</h3>
            <hr/>
            <div>
                {name}
            </div>
        </div>

    )
}