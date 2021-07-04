import React,{ useState } from 'react'

function HookCounter4() {
    const [items,setItems]  = useState ([]);


const addItem = () => {
    setItems([...items, {
        id: items.length,
        value: Math.floor(Math.random() * 100) + 1
    }])
}


    return (

        <div>
        <button onClick={addItem}>Add Item</button>
            <ul>
                {
            items.map(items => <div key ={items.id}>{items.id} {items.value}</div>
             ) }
            </ul>
        </div>
    )
}

export default HookCounter4
