import React from 'react'


const Skills = (props) => {
    console.log(props)
return (
    <div>
    <h1>Skills {props.name} </h1>
    {props.children}
    </div>
)
}



export default Skills;