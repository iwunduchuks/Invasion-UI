import React from "react";
import './Button.css';
import '../../style/style.css';

export default function Button({name, variant, disabled, onClick, id}: {
    name: string,
    variant?: 'filled' | 'outlined' | 'text',
    disabled?: boolean,
    onClick?: () => void,
    id?: string
}) {
    return (
        <button 
        className={variant? `button-${variant}`:'button-filled'} 
        onClick={onClick} 
        id={id}
        disabled= {disabled && disabled}
        >
          {name} 
        </button>
    )
}