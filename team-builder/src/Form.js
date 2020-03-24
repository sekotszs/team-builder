import React, { useState } from 'react';

const Form = () => {
    const [name, setName] = useState('');
    const[email,setEmail] = useState('');
    const [role,setRole] = useState('');

    const changeName = (event) => {
        setName(event.target.value)
    }

    const changeEmail = (event) =>{
        setEmail(event.target.value)
    }

    const changeRole = (event =>{
        setRole(event.target.value)
    })
    return (
        <div>
            <form>
                <label>
                    Name: 
                    <input
                     id='name' 
                    type='text' 
                    onChange={event => changeName(event)} 
                    value={name} />
                </label>

                <label>
                    Email: 
                    <input 
                    id='email' 
                    type='text' 
                    onChange={event => changeEmail(event)} 
                    value={email} />
                </label>

                <label>
                    Role: 
                    <input
                     id='role' 
                    type='text' 
                    onChange={event => changeRole(event)} 
                    value={role} />
                </label>

            </form>
        </div>
    )
}


export default Form;