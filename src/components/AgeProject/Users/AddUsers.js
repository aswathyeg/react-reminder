import React, { useState } from "react";
import Display from "../Display/Display";
import Button from "../UI/Button";
import Card from '../UI/Card';
import classes from './AddUser.module.css';


const AddUsers = () => {
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
        SetUsername('');
        SetAge('');
       
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
                <div>
                    {/* <Display username={username}
                        age={age} /> */}
                </div>
            </form>
        </Card>
    )
}
export default AddUsers;