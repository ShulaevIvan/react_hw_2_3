import React from "react";
import { useState } from "react";
import DropdownList from "../DropdownList/DropdownList";

const Dropdown = () => {
    const initialState = {
        visible: 'hidden',
    }
    const [listStatus, setListStatus] = useState(initialState);

    const handleClick = (e) => {
        if (listStatus.visible === 'hidden') {
            return setListStatus(prev =>  prev = {visible: 'visible'})
        }
        return setListStatus(prev =>  prev = {visible: 'hidden'})
    }

    return (
        <React.Fragment>
            <div className="container">
                <div data-id="wrapper" className="dropdown-wrapper open">
                    <button data-id="toggle" className="btn" onClick={handleClick}>
                        <span>Account Settings</span>
                        <i className="material-icons">public</i>
                    </button>
                <DropdownList status = {listStatus.visible}></DropdownList>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Dropdown;