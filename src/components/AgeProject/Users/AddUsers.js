import React, { useState } from "react";
import Button from "../UI/Button";
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import ErrorModal from "../UI/ErrorModal";

const AddUsers = (props) => {
    const [username, SetUsername] = useState('');
    const [age, SetAge] = useState('');
    const [valid, setValid] = useState();

    const handleAdd = (e) => {
        e.preventDefault();
        console.log(username, age);
        if (username.trim().length === 0 || age.trim().length === 0) {
            setValid({
                title: "Invalid Input",
                message: "Please fill both Username and Password"
            })
            return;
            // setValid(false)


        }
        if (+age < 1) { // to ensure that it a number, added + 
            setValid({
                title: "Invalid Age",
                message: " Please enter a valid age"
            })
            return;
        }
        props.onValue(username, age); //calling parent's (App) function
        SetUsername('');
        SetAge('');

    }


    const handleUsername = (e) => { //fetch username
        SetUsername(e.target.value)

    }
    const handleAge = (e) => { //fetch password
        SetAge(e.target.value)

    }

    const handleError = () => {

        setValid(null);

    }

    return (
        <div>
            {valid && <ErrorModal title={valid.title} message={valid.message}
                onConfirm={handleError} />}
            <Card className={classes.input}>
                <form onSubmit={handleAdd}>

                    <label htmlFor="username"

                    // style={{color: !valid ? 'red':'black'}}
                    >Username</label>
                    <input id="username" type="text"
                        onChange={handleUsername}
                        value={username}
                    />


                    <label htmlFor="age"
                    //  style={{color: !valid ? 'red':'black'}}
                    >Age(Years)</label>
                    <input id="age" type="number"
                        onChange={handleAge}
                        value={age} />

                    <div>
                        <Button type="submit" > Add User</Button>
                    </div>

                </form>
            </Card>
        </div>
    )
}
export default AddUsers;