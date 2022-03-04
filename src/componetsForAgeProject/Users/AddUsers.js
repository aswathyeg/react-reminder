import React, { useState }  from "react";
import Card from'../UI/Card';
import classes from './AddUser.module.css';
export default function AddUsers(props){
    const[username,setUsername]=useState('');
    const [age,setaAge]=useState(0);

    const handleSubmit=(e)=>{
        e.preventDefault();

    }
    const handleName=(e)=>{
        setUsername(e.target.value);
        username('')



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
           <button type="submit">AddUser</button>

       </form>
       </Card>
    )
}