import React from "react";
import classNames from "classnames";
import '../../style/global.css';
import { useThemeContext } from "../../providers/ThemeProvider";
import appBarStyle from './AppBar.module.css';

export default function AppBar(props: {
    children: React.ReactNode,
    ClassName?: string,
    id?: string,
    style?: object,
}) {

    const theme = useThemeContext();
    const defaultClassName = classNames(
        appBarStyle.appbar, 
        theme? theme: appBarStyle.base,
        props.ClassName && props.ClassName
    )
    return (
        <div 
        className={defaultClassName}
        id= {props.id}
        style= {props.style}
        {...props}
        >
        {props.children}
        </div>
    )
}

