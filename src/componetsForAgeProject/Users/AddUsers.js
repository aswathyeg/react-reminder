import React, { useState }  from "react";
import Button from "../UI/Button";
import Card from'../UI/Card';
import classes from './AddUser.module.css';
export default function AddUsers(props){
    const[username,setUsername]=useState('');
    const [age,setaAge]=useState(0);

    const handleSubmit=(e)=>{
        e.preventDefault();
        setUsername('');
        setaAge('');
        props.handleCallback(username.age);

    }
    const handleName=(e)=>{
        setUsername(e.target.value);
      
    }
    const handleAge=(e)=>{
        setaAge(e.target.value)
        age('');        
    }

    return(
        <Card className={classes.input}>
       <form onSubmit={handleSubmit}>
           < label html for="username"/>
           <input type="text" value={ username} onChange={handleName}/>
           <label htmlFor=" age"/>
           <input type="text" value={age} onChange={handleAge}/>
           <Button type="submit">AddUser</Button>

       </form>
       </Card>
    )
}