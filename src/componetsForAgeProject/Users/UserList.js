
import React from "react";
export default function UserList(props){
    return(
        <div>
            
              
            <ul >
           {props.value.map((user)=>(
               <li>{user.name} ({user.age} Years old )</li>

           ))}
           
       </ul>
        </div>
    )
}