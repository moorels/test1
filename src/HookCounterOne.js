import React,{useState, useEffect} from 'react'

function HookCounterOne() {

const [count,setCount]  = useState (0)  
const [color,setColor] = useState ('')
const [color1,setColor1] = useState ('')

function X1() {
    return (
        <div style={{color: `${color1}`, fontSize: "60px",
        background: `${color}`}}>HELLO THERE</div>
    )
}


useEffect (()=> {
document.title = `${count}`
setColor(`#${Math.floor(Math.random()* 999999)}`)
setColor1(`#${Math.floor(Math.random()* 999999)}`)
},[count])

    return (
        <div>
        <div>
        <button onClick={()=> setCount(count + 1)}>{count}</button>
        </div>
<X1/>
        </div>
    )
}

export default HookCounterOne
