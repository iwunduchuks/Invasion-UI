import React from "react";
import classNames from "classnames";
import './Button.css';
import '../../style/global.css';
import { useThemeContext } from "../../providers/ThemeProvider";

export default function Button(props: {
    name: string,
    variant?: 'filled' | 'outlined' | 'text',
    disabled?: boolean,
    onClick?: () => void,
    className?: string,
}) {

    const theme = useThemeContext()
    const defaultClassName = classNames(
        'button', 
        theme? theme: 'base', 
        props.variant? props.variant:'filled'
    )
    return (
        <button 
        className={props.className? props.className: defaultClassName} 
        onClick={props.onClick} 
        disabled= {props.disabled && props.disabled}
        {...props}
        >
          {props.name} 
        </button>
    )
}