import React,{useState} from 'react'

function HookCounter3() {

    const [name,setName] = useState 
    ({firstName: 'firstName', lastName : 'lastname'})
    return (
        <div>
            <form>
            <input type="text" placeholder="FirstName"
            onChange={e => setName({...name ,firstName: e.target.value})}/>
            <input type="text" placeholder="LastName"
            onChange={e => setName({...name ,lastName: e.target.value})}/>

            <h2>First Name : {name.firstName}</h2>
            <h2>Last Name : {name.lastName}</h2>


            </form>
        </div>
    )
}

export default HookCounter3
