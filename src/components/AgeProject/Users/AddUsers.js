import React, { useState } from "react";
import Display from "../Display/Display";
import Card from '../UI/Card';
import classes from './AddUser.module.css';


const AddUsers = () => {
    const [username, SetUsername] = useState([{}]);
    const [age, SetAge] = useState(0);

    const handleAdd = (e) => {
        e.preventDefault();

        SetUsername({
            username: e.target.value
        })
        SetAge({
            age: e.target.value
        })

    }

    return (
        <Card className={classes.input}>
            <form onSubmit={handleAdd}>

                <label htmlFor="username">Username</label>
                <input id="username" type="text" value="" />


                <label htmlFor="age">Age(Years)</label>
                <input id="age" type="number" />

                <div>
                    <button type="submit">
                        Add User
                    </button>
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