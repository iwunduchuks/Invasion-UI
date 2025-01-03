import React from "react";
import classNames from "classnames";
import '../../style/global.css';
import { useThemeContext } from "../../providers/ThemeProvider";
import './AppBarGroup.css'

export default function AppBarGroup(props: {
    children: React.ReactNode,
    alignSelf?: 'start' | 'center' | 'end' | string,
    alignItems?: 'start' | 'center' | 'end' | string,
    justifyContent?: 'start' | 'center' | 'end' | string,
    gap?: '32px' | '16px' | string
    className?: string,
    id?: string,
    style?: object,
}) {

    const theme = useThemeContext();
    const defaultClassName = classNames(
        'appbar-group'
    )
    return (
        <div 
        className={props.className? props.className: defaultClassName}
        id= {props.id}
        style= {{
            alignSelf: props.alignSelf? props.alignSelf: 'center',
            alignItems: props.alignItems? props.alignItems: 'center',  
            justifyContent: props.justifyContent? props.justifyContent: 'start',
            gap: props.gap? props.gap:'2rem', 
            ...props.style
        }}
        {...props}
        >
        {props.children}
        </div>
    )
}