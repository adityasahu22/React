
import React from 'react'




const Hobby = (props) => {
    console.log(props)
return (
    <div>
    <h1>Hobbies {props.name} </h1>
    {props.children}
    </div>
)
}




export default Hobby;