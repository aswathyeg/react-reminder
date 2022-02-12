import React, { useState } from "react";

 const Display = (props) => {
     let username=props.username;
     let age=props.age;
     return(
         <p>{username}</p>
     )
 }
 export default Display;