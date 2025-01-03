import React from "react";
import classNames from "classnames";
import '../../style/global.css';
import { useThemeContext } from "../../providers/ThemeProvider";
import './AppBar.css'

export default function AppBar(props: {
    children: React.ReactNode,
    className?: string,
    id?: string,
    style?: object,
}) {

    const theme = useThemeContext();
    const defaultClassName = classNames(
        'appbar', 
        theme? theme: 'base'
    )
    return (
        <div 
        className={props.className? props.className: defaultClassName}
        id= {props.id}
        style= {props.style}
        {...props}
        >
        {props.children}
        </div>
    )
}

