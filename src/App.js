import React, { Component } from 'react';

const App = () => {
    const profiles = [
        { name : "Taro", age : 10},
        { name : "Hanako", age : 5},
        { name : "None"}
    ]
    return (
        <div>
            {
            profiles.map((profile, index) => {
            return <User name={profile.name} age={profile.age} key={index}/>
            })
            }
        </div>
    )
}

const User = (props) => {
    return <div>I am {props.name}! And I am {props.age} years old ! </div>
}

User.defaultProps = {
    age : 1
}

export default App;
