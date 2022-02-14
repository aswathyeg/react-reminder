import React, { useState } from "react";

import Button from "../UI/Button";
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import UsersList from "./UsersList";


const AddUsers = (props) => {
    const [username, SetUsername] = useState('');
    const [age, SetAge] = useState('');
    const[valid,setValid]=useState(true);

    const handleAdd = (e) => {
        e.preventDefault();
        console.log(username,age);
        if(username.trim().length===0 || age.trim().length===0){
            return(
            setValid(false)
            )
           
        }
        if(+age<1){ // to ensure that it a number, added + 
            return(
            setValid(false))
        }
        props.onValue(username,age); //calling parent's (App) function
        SetUsername('');
        SetAge('');
       
    }


    const handleUsername=(e)=>{ //fetch username
        SetUsername(e.target.value)
             
    }
    const handleAge=(e)=>{ //fetch password
        SetAge( e.target.value )
        
    }


    return (
        <Card className={classes.input}>
            <form onSubmit={handleAdd}>

                <label htmlFor="username" style={{color: !valid ? 'red':'black'}}>Username</label>
                <input id="username" type="text"
                  onChange={handleUsername} 
                  value={username}
                  />


                <label htmlFor="age" style={{color: !valid ? 'red':'black'}}>Age(Years)</label>
                <input id="age" type="number" 
                 onChange={handleAge}
                 value={age}/>

                <div>
                   <Button type = "submit" > Add User</Button>
                </div>
                
            </form>
        </Card>
    )
}
export default AddUsers;