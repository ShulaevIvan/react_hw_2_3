import React from "react";
import { useState } from "react";
import DropdownItem from "../DropdownItem/DropdownItem";

const DropdownList = (props) => {
    const inlineStyle = {
        visibility: props.status,
    };
    const swapStatus = (e) => {
        const tmpStatus = [];
        e.preventDefault();
        const id = Number(e.target.parentNode.getAttribute('data-id'));
        listItems.map((item, i) => {
            item.status = '';
            if (item.id === id)  {
                item.status = 'active';
            }
            tmpStatus.push(item);
            setListItems(tmpStatus)
        })
    }
    const initialState = [
        {
            id: 1,
            status: 'active',
            content: 'Profile Information',
            event: swapStatus,
        },
        {
            id: 2,
            status: '',
            content: 'Change Password',
            event: swapStatus,
        },
        {
            id: 3,
            status: '',
            content: 'Become PRO',
            event: swapStatus,
        },
        {
            id: 4,
            status: '',
            content: 'Help',
            event: swapStatus,
        },
        {
            id: 5,
            status: '',
            content: 'Log Out',
            event: swapStatus,
        },
    ]
    const [listItems, setListItems] = useState(initialState);

    return (

        <ul data-id="dropdown" className="dropdown" style={inlineStyle}>
            {listItems.map((listItem, i) => {
                return (
                    <DropdownItem key={i} item = {listItem}></DropdownItem>
                )
            })}
        </ul>
        
    )
}

export default DropdownList;