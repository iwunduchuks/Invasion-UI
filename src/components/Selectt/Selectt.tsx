import React, { useEffect, useRef, useState } from "react";
import { TextInput } from "../TextInput";
import { Menu } from "../Menu";
import Style from './Select.module.css'

export default function Select (props: {
    options: {name: string, value: string}[],
    placeholder: string,
    selected?: any
}) {

    const [inputState, setInputState] = useState('');

    const [filteredOption, setFilteredOption] = useState(props.options);

    const [selected, setSelected] = useState({name: '', value: ''});

    const textInputRef = useRef<HTMLInputElement>(null);

    const handleOnChange = (event: any) => {
        const text = event.target.value
        console.log(text)
        setInputState(text)

        // set search Filter
        if (text == '') {
            setFilteredOption(props.options)   // reset filter 
        }
        else {
            const filter = props.options.filter((option) => {
                return(option.name.toLowerCase().includes(text.toLowerCase()))
            })
            if (filter[0]) {
                setFilteredOption(filter)
            }
            else {
                setFilteredOption([{name: '', value: ''}])
            }
        }
    }

    const handleArrowClick = (event: any) => {
        textInputRef.current?.click()
    }

    const handleOnBlur = (event: any) => {
        setFilteredOption(props.options) // resets filter
    }

    useEffect(() => {
        console.log('Selected:',selected)
        if (selected.name == '') {

        }
        else {
            setInputState(selected.name)
        }
    }, [selected])
    
    return (
        <div className={Style.dropdown}>
            <TextInput 
            placeholder={props.placeholder} 
            onChange={handleOnChange}
            value={inputState}
            {...{
                    id: Style.text,
                    ref: textInputRef,
                    onBlur: handleOnBlur
            }} 
            />
            
            <div 
            className={Style.arrow} 
            onClick={handleArrowClick}></div>
            
            <Menu 
            checklist={inputState}
            options={filteredOption} 
            classname={Style.menu}
            onselected={setSelected}
            />

        </div>
    )
}