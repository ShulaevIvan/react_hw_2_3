import React from "react";
import { useState } from "react";

const DropdownItem = (props) => {
    const [itemState, setItemState] = useState(props.item);
    
    const handleClick = (e) => {
        e.preventDefault();
        if (itemState.status === '') {
            setItemState({
                ...itemState,
                status: 'active'
            })
        }
        else if (itemState.status === 'active') {
            setItemState({
                ...itemState,
                status: ''
            })
        }
        
    }
    return (
        <li className={itemState.status}><a href="#"  onClick={handleClick}>{itemState.content}</a></li>
    )
}

export default DropdownItem;