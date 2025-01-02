import './ToggleItems.css'
import '../../style/global.css';
import React from "react";
import classNames from 'classnames';
import { useThemeContext } from '../../providers/ThemeProvider';

// for different componenet stye variants would be done with dynamic class names passed as props
// then style is left as inline style overide

export default function ToggleItems(props: {
    value: string,
    variant?: 'dark-filled' | 'light-filled',
    defaultChecked?: boolean,
    onChange?: (e: any) => void,
    className?: string,
}) {


    const theme = useThemeContext(); // from context API
    const defaultClassName = classNames(
        'toggle-items', 
        theme? theme:'base', 
        props.variant? props.variant: 'dark-filled'
    )

    return (
    <label>
        <input 
        type="radio" 
        name= 'toggle'
        value={props.value}
        defaultChecked= {props.defaultChecked && props.defaultChecked}
        onChange={props.onChange}/>
        <div
        className={props.className? props.className: defaultClassName}
        {...props}
        >{props.value}
        </div>
    </label>
    )
}