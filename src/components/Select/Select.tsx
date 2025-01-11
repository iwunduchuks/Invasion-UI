import React from "react";
import Style from './Select.module.css'
import '../../style/global.css';
import classNames from "classnames";
import { useState, useEffect, useRef } from "react";
import {capitalCase} from 'change-case'


export default function Select (props: {
    options: Array<string>,
    placeholder: string,
    onChange?: any
}) {
    const [dropdownActive, setDropdownActive] = useState(false);
    const handleFocus = () => {
        setDropdownActive(true)
    }
    const handleBlur = () => {
        setDropdownActive(false)
        setSelected(capitalCase(selected))
        setFilteredList([])
    }

    const [selected, setSelected] = useState('')
    const [filteredList, setFilteredList] = useState([''])
    const [noFilterFound, setNoFilterFound] = useState(false)
    // add validation for text that are not correct options
    
    const handleOptionsClick = (event: any) => {
        const textContent = event.target.textContent
        setSelected(textContent);
        setFilteredList([])
    }

    const handleTextChange = (event: any) => {
        const textInput = event.target.value;
        const filteredOptions = textInput? props.options.filter((option) => 
            option.toLowerCase().includes(textInput.toLowerCase())
        ): [];

        if (textInput && !filteredOptions.length) {
            setNoFilterFound(true)
        }
        else {
            setNoFilterFound(false)
        }

        setSelected(textInput);
        setFilteredList(filteredOptions)
    }

    const inputReference = useRef<HTMLInputElement>(null);
    const handlekeydown = (event: any) => {
        const key = event.key

        // choosing List depending on complete or filtered situation
        const prefList = filteredList[0]? filteredList: props.options; 

        if (key == 'Enter') {
            inputReference.current?.blur()
        }

        if (key == 'ArrowDown') {
            const index = prefList.indexOf(selected);
            if (index == -1) { // meaning selected not in option
                setSelected(prefList[0]) // starts the move through list on first element
            }
            else {
                setSelected(prefList[index + 2 > prefList.length? index: index + 1])
                listReference.current?.scrollIntoView({behavior: 'smooth', block: 'center'})
            }
        }

        if (key == 'ArrowUp') {
            const index = prefList.indexOf(selected);
            if (index == -1) {
                // do nothing
            }
            else {
                setSelected(index==0? prefList[0]: prefList[index - 1])
                listReference.current?.scrollIntoView({behavior: 'smooth', block: 'center'})
            }

        }
    }

    const listReference = useRef<HTMLLIElement>(null);

    useEffect(() => props.onChange(selected))

    return (
        <div className={Style.dropdown}>
            <label className={Style.dropdownface}>
            <input 
            type="text"
            placeholder={props.placeholder}
            value={selected? selected: ''}
            onChange={handleTextChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handlekeydown}
            ref={inputReference}
            className={Style.text}
            />
            <div className={Style.arrow}></div>
            </label>

            {noFilterFound? 
                <ul 
                className={
                    dropdownActive? classNames(Style.items, Style.visible): Style.items
                }>
                    <li id={Style.noOptionFound}>
                        No option found
                    </li>
                </ul>:
                <ul 
                className={
                    dropdownActive? classNames(Style.items, Style.visible): Style.items
                    }>
                    {filteredList[0] ? 
                    filteredList.map((option, index) => {
                        return (
                            <li 
                            key={index}
                            onMouseDown={handleOptionsClick} 
                            ref={selected == option? listReference: undefined}
                            id={selected.toLowerCase() == option.toLowerCase() ? Style.selectedOption: undefined}
                            >
                                {option}
                            </li> 
                            )
                    }):
                    props.options.map((option, index) => {
                        return (
                            <li 
                            key={index}
                            onMouseDown={handleOptionsClick} 
                            ref={selected == option? listReference: undefined}
                            id={selected.toLowerCase() == option.toLowerCase() ? Style.selectedOption: undefined}
                            >
                                {option}
                            </li>
                        )
                    })}
                </ul> 
            }
        </div>
    )
}