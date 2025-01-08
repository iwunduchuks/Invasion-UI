import React from "react";
import '../../style/global.css';
import Style from './SectionItems.module.css'
import classNames from "classnames";
import { useThemeContext } from "../../providers/ThemeProvider";

export default function SectionItems(props:{
    children: React.ReactNode,
    layout: 'full' | 
            'major-minor' | 
            'minor-major' | 
            'half-half' | 
            'minor4' | 
            'half-minor2' | 
            'minor2-half' | 
            'minor-half-minor',
    gap?: '48px' | '24px' | '12px' | string,
    style?: object,
    ClassName?: string,
    id?: string
}) {
    
    const theme = useThemeContext();
    const defaultClassName = classNames(
        Style['section-items'], 
        theme? theme: Style['base'],
        Style[props.layout],
        props.ClassName && props.ClassName
    );
    return (
        <div 
        className= {defaultClassName} 
        id={props.id}
        style={{gap: props.gap? props.gap: '24px', ...props.style}}
        {...props}
        >
            {props.children}
        </div>
    )
}