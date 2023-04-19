import React from "react";
import { useState } from "react";

const DropdownItem = (props) => {
    const [itemState, setItemState] = useState(props.item);
    return (
        <li className={itemState.status} data-id={itemState.id}><a href="#"  onClick={() => itemState.event(itemState)}>{itemState.content}</a></li>
    )
}

export default DropdownItem;