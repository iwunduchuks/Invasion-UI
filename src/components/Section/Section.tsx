import React from "react";
import '../../style/global.css';
import './Section.css'
import classNames from "classnames";
import { useThemeContext } from "../../providers/ThemeProvider";

export default function Section(props:{
    children: React.ReactNode,
    gap: 'gap-48px' | 'gap-24px' | 'gap-12px'
    className?: string,
    id?: string
}) {
    
    const theme = useThemeContext();
    const defaultClassName = classNames(
        'section', 
        theme? theme: 'base',
        props.gap
    );
    return (
        <div 
        className= {props.className? props.className: defaultClassName} 
        id={props.id} 
        {...props}
        >
            {props.children}
        </div>
    )
}

