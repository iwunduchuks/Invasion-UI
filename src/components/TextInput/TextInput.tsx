import React from "react";
import Style from './Textinput.module.css'
import classNames from "classnames";

export default function TextInput (props: {
    placeholder?: string,
    value?: string,
    onChange?: any,
}) {
    return (
        <>
        <input 
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        {...props}
        />
        </>

    )
}