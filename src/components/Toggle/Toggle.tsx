import React from "react";
import classNames from "classnames";
import '../../style/global.css';
import './Toggle.css'
import { useThemeContext } from "../../providers/ThemeProvider";

export default function Toggle(props:{
    children: any,
    onChange?: any,
    variant?: 'dark-filled' | 'light-filled',
    className?: string,
    id?: string,
    style?: object
}) {
    
    const theme = useThemeContext();
    const defaultClassName = classNames(
        'toggle', 
        theme? theme: 'base'
    )
    return (
        <form 
            className= {props.className? props.className: defaultClassName}
            id={props.id}
            style={props.style}
        >
            {React.Children.map(props.children, (child) => 
                React.cloneElement(child, {
                    variant: props.variant,
                    onChange: props.onChange,
                    ...props
                    }
                )
            )}
        </form>
    )
}