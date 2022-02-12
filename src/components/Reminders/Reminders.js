import React, { useState } from 'react';
 import './Reminders.css';

const Reminders = () => {
    const [formValue, setformValue] = useState([{ item: "" }]);

    let handleChange=(index,e)=>{
       let newFormValue=[...formValue];
        newFormValue[index][e.target.name]=e.target.value;
        setformValue(newFormValue);

    }

    let onAdd=()=>{
       
        setformValue([...formValue,{item:""}])

    
    }
    let handleSubmit=(event)=>{
        
        event.preventDefault();
        alert(JSON.stringify(formValue));
    
    }

let handleRemove=(e)=>{
    let newFormValue=[...formValue];
    newFormValue.splice(e,1);
    setformValue(newFormValue);
}
   return ( 
    <div className='oute'>
        <form onSubmit={handleSubmit}>
             
            {formValue.map((element, index) => {
                return(
                <div className="form-inline" key={index}>

                    <input type="text" 
                    name='item'
                    placeholder='Type item name'
                    onChange = {e=>handleChange(index,e)}
                    value={element.item || ""}></input>

                    {
                        index ?
                            <button onClick={()=>handleRemove(index)}>Remove</button>
                            : null
                    }
                </div>
                )

                })}
           <div className="button-section">
<button className="button add" onClick={()=>onAdd()}>Add</button>
<button className="button submit" type="submit">Submit</button>
            </div>

        </form>
        </div>
       
    )
}

export default Reminders;
