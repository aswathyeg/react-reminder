import React, { useState } from "react";
import Display from "../Display/Display";
import Button from "../UI/Button";
import Card from '../UI/Card';
import classes from './AddUser.module.css';


const AddUsers = () => {
    const [username, SetUsername] = useState([{}]);
    const [age, SetAge] = useState(0);

    const handleAdd = (e) => {
        e.preventDefault();
    }


    const handleUsername=(e)=>{
        SetUsername(e.target.value)
             
    }
    const handleAge=(e)=>{
        SetAge( e.target.value )
        
    }


    return (
        <Card className={classes.input}>
            <form onSubmit={handleAdd}>

                <label htmlFor="username">Username</label>
                <input id="username" type="text" value=""
                  onChange={handleUsername} />


                <label htmlFor="age">Age(Years)</label>
                <input id="age" type="number" 
                 onChange={handleAge}/>

                <div>
                   <Button type = "submit" > Add User</Button>
                </div>
                <div>
                    {/* <Display username={username}
                        age={age} /> */}
                </div>
            </form>
        </Card>
    )
}
export default AddUsers;