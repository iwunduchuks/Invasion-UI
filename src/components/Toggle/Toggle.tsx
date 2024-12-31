import React from "react";
import './Toggle.css'

export default function Toggle({children, onChange, toggleVariant}:{
    children: any,
    onChange?: any,
    toggleVariant?: 'toggle-dark' | 'toggle-light'
}) {
    
    return (
        <form className='toggleGroup'>
            {React.Children.map(children, (child) => 
                React.cloneElement(child, {
                    variant: toggleVariant,
                    onChange: onChange
                    }))}
        </form>
    )
}