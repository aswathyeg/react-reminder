import React  from "react";
import classes from './Card.module.css';

const Card=props=>{
    return(
        // for accessing styles from Card module and parent module(AddUser.module.css)
        <div className={`${classes.card} ${props.className}`}>

            {/* wrap AddUsers component */}
            {props.children}
            
        </div>
    )

}
export default Card;
