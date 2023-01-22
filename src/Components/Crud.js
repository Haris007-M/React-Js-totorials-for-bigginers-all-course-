import React from 'react'
import { useState } from 'react'
import CrudAdd from './CrudAdd'

export default function Crud() {
    const list = [
        {
            id: 1,
            name: "Haris",
        },
        {
            id: 2,
            name: "Aizaz",
        },

    ]
    const [lists, setLists] = useState(list)
    return (
        <>
            <CrudAdd />
            <div>
                <table>
                    {lists.map((current) => (
                        <>
                            <tr>
                                <td>{current.id}</td>
                                <td>{current.name}</td>
                                <td>
                                    <button className='btn btn-info'>Edit</button>
                                    <button className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        </>

                    ))}
                </table>
            </div>
        </>
    )
}
