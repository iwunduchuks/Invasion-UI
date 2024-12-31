import './ToggleItems.css'
import React from "react";

// for different componenet stye variants would be done with dynamic class names passed as props
// then style is left as inline style overide

export default function ToggleItems({value, variant, defaultChecked ,onChange, style}: {
    value: string,
    variant?: 'toggle-dark'| 'toggle-light',
    defaultChecked?: boolean,
    onChange?: (e: any) => void,
    style?: any
}) {

    return (
    <label>
        <input 
        type="radio" 
        name= 'toggle'
        value={value}
        defaultChecked= {defaultChecked && defaultChecked}
        onChange={onChange}/>
        <div
        className={variant? variant:"toggle-dark"}
        style={style}
        >{value}
        </div>
    </label>
    )
}