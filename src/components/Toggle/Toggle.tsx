import React from "react";
import classNames from "classnames";
import '../../style/global.css';
import Style from './Toggle.module.css'
import { useThemeContext } from "../../providers/ThemeProvider";

export default function Toggle(props:{
    children: any,
    onChange?: any,
    variant?: 'dark-filled' | 'light-filled',
    ClassName?: string,
    id?: string,
    style?: object
}) {
    
    const theme = useThemeContext();
    const defaultClassName = classNames(
        Style.toggle, 
        theme? theme: Style.base,
        props.ClassName && props.ClassName
    )
    return (
        <form 
            className= {defaultClassName}
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