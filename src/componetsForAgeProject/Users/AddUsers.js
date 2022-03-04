import React, { useState }  from "react";
import Button from "../UI/Button";
import Card from'../UI/Card';
import classes from './AddUser.module.css';

export default function AddUsers(props){
    const[username,setUsername]=useState('');
    const [age,setaAge]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
       
        props.handleCallback(username,age);
        setUsername('');
        setaAge('');
    }
    const handleName=(e)=>{
        setUsername(e.target.value);
      
    }
    const handleAge=(e)=>{
        setaAge(e.target.value)
                
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