import React from 'react'


const Bio = (props) => {
    console.log(props)
return (
    <div>
    <h1>Hii, This is {props.name} </h1>
    {props.children}
    </div>
)
}

export default Bio;