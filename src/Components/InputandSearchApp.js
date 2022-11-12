import { useState, useRef } from 'react'

export default function InputandSearchApp() {
    const [items, setItems] = useState([])
    const [query, setQuery] = useState("")
    const inputRef = useRef()


    const FiltedItems = items.filter(item => {
        return item.toLowerCase().includes(query.toLowerCase())
    })




    // submit function
    function submit(e) {
        e.preventDefault()

        const value = inputRef.current.value
        if (value === "") return
        setItems(prev => {
            return [...prev, value]
        })
        inputRef.current.value = ""
    }


    return (


        <div class="container text-center">
            <div class="row">
                <div class="col"><label for="name">Search</label></div>
                <div class="col"><input type="text" value={query} onChange={e => setQuery(e.target.value)} name="name" /></div>

            </div>
            <div class="row">
                <div class="col-8"><form onSubmit={submit}>
                    <label for="">Input</label>
                    <input type="text" ref={inputRef} /> <br /> <br />
                    <button type="submit">Add</button>
                </form></div>
                <div class="col-4"><h2>Item : </h2>
                    {FiltedItems.map(item => (
                        <div>
                            {item}
                        </div>
                    ))}</div>
            </div>
        </div>

    )
}
