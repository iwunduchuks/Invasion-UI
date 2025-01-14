import React, { useEffect, useRef, useState } from "react";
import Style from './Menu.module.css'
import classNames from "classnames";

export default function Menu (props: {
    options: {name: string, value: string}[]
    onselected?: any
    checklist?: string // if in list, sets on selected as itself
    classname?: string
    id?: string
    style?: object
}) {

    // states and references

    const [selected, setSelected] = useState({name: '', value: ''});

    const optionsRef = useRef<HTMLLIElement>(null);
    optionsRef.current?.scrollIntoView({behavior: 'smooth', block: 'center'})

    // Event Handlers

    const handleOptionsClick = (event: any) => {
        const selectedOption = {name: event.target.textContent, value: event.target.dataset.value};
        setSelected(selectedOption);
    }

    // Use effect to send selected state back to User via onSelected
    useEffect(() => {
        if (props.onselected) {
            props.onselected(selected)
        };

        console.log(selected)

    }, [selected]);

    // use effect for checkList
    useEffect(() => {
        const optionName = props.options.map((option) => {
            return (option.name.toLowerCase())
        })

        
        if (props.checklist) {
            const index = optionName.indexOf(props.checklist.toLowerCase())
            if (index != -1) { // if checklist is in option
                setSelected(props.options[index]) // sets checklist as selected
            }
            else { // if checklist not in option
                if (selected.name == '' && selected.value == '') {

                }
                else {
                    setSelected({name: '', value: ''})
                }
            };
        }
    }, [props.checklist])

    return (
        <ul 
        className={
            classNames(
                Style.items, 
                props.classname
            )
        }
        id={props.id}
        style={props.style}
        {...props}
        >
            {   
                props.options[0].name?
                props.options.map((option, index) => {
                    return (
                        <li 
                        key={index}
                        data-value={option.value}
                        onMouseDown={handleOptionsClick}
                        ref={selected == option? optionsRef: undefined}
                        id={selected.name.toLowerCase() == option.name.toLowerCase() ? Style.selectedOption: ''}
                        >
                            {option.name}
                        </li> 
                    )
                }):

                <li id={Style.noOptions}>
                    No options found
                </li>
            }
        </ul>
    )
}