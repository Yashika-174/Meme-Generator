import Draggable from 'react-draggable';
import { useState } from 'react';

export default function Text(){

    const [editMode,setEditMode]=useState(false);
    const [value,setValue]=useState('Double Click to Edit');

    function handleInputChange(event){
        setValue(()=>{
            return (event.target.value);
        })
    }

    function toggleEditMode(){
        (!editMode)? (setValue(null)):"";
        setEditMode(!editMode);
    }

    return (<div>
        <Draggable>
        {editMode?(<input value={value} onChange={handleInputChange} onDoubleClick={toggleEditMode}/>):(<h3 onDoubleClick={toggleEditMode}>{value}</h3>)}
        </Draggable>
    </div>)
}