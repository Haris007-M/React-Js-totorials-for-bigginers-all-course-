import React from 'react'
import ListandKeytwo from './ListandKeytwo'

export default function ListandKeys() {

    const names = [
        {
            id: 1,
            Name: "Haris",
        },
        {
            id: 2,
            Name: "Aizaz",
        },
        {
            id: 3,
            Name: "Forqan",
        },
        {
            id: 4,
            Name: "Azan",
        }
    ]


    let x = names.map(brothers => <ListandKeytwo key={brothers.id} adil={brothers} />)
    return (
        <div>
            {x}
        </div>
    )
}
