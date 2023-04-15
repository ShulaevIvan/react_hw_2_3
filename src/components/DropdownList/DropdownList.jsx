import React from "react";
import { useState } from "react";
import DropdownItem from "../DropdownItem/DropdownItem";

const DropdownList = (props) => {
    const inlineStyle = {
        visibility: props.status,
    };
    const listItems = [
        {
            id: 1,
            status: 'active',
            content: 'Profile Information',
        },
        {
            status: '',
            content: 'Change Password'
        },
        {
            id: 2,
            status: '',
            content: 'Become PRO'
        },
        {
            id: 3,
            status: '',
            content: 'Help'
        },
        {
            id: 4,
            status: '',
            content: 'Log Out'
        },
    ]
    
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