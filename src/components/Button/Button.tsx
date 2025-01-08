import React from "react";
import classNames from "classnames";
import Styles from './Button.module.css';
import '../../style/global.css';
import { useThemeContext } from "../../providers/ThemeProvider";

export default function Button(props: {
    name: string,
    variant?: 'filled' | 'outlined' | 'text',
    disabled?: boolean,
    onClick?: () => void,
    ClassName?: string,
    id?: string,
    style?: object
}) {

    const theme = useThemeContext()
    const defaultClassName = classNames(
        Styles.button, 
        theme? theme: Styles.base, 
        props.variant? Styles[props.variant]: Styles.filled,
        props.ClassName && props.ClassName
    )

    console.log(defaultClassName)
    return (
        <button 
        className={defaultClassName} 
        onClick={props.onClick} 
        disabled= {props.disabled && props.disabled}
        id={props.id}
        style={props.style}
        {...props}
        >
          {props.name} 
        </button>
    )
}