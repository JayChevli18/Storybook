import React, {useState} from "react"
import "../app/globals.css";

export interface InputProps {
    id: string;
    name: string;
    label?: string;
    labelClassName?: string;
    placeholder: string;
    type: "text" | "password" | "email" | "number" | "file" | "tel";
    value?: string;
    disabled?: boolean;
    backgroundColor?: string;
    onChange?: (event:any) => void;
    error?: string;
    pattern?: string;
    list?: string;
    listoptions?: string[];
    customClassName?: string;
    allowSearch?: boolean;
    asterick?: boolean;
    required?: boolean;
}


export const Input =  ({ id, name, label, labelClassName, placeholder, type, value, disabled = false, backgroundColor, error, pattern, list, listoptions = [], customClassName, allowSearch = false, asterick = false, onChange, required = false }: InputProps) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event: any) => {
        setInputValue(event.target.value);
        // console.log(inputValue);
        if (onChange) {
            onChange(event);
        }
    };

    console.log(inputValue);
    return (
        <div className="grid w-full items-center gap-1.5 relative">
            <div className="flex items-center">
                {label && <label htmlFor={id} className={`${labelClassName || "text-blue-500 "} text-sm font-medium`}>{label}</label>}
                {
                    asterick && <span className="text-red-600 ml-1 font-bold ">*</span>
                }
            </div>
            <div className="relative w-[250px]">
                {allowSearch && (
                    <svg
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 5 5a7.5 7.5 0 0 0 11.65 11.65z"></path>
                    </svg>
                )}
                <input
                    id={id}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={inputValue}
                    disabled={disabled}
                    onChange={handleChange}
                    className={`border rounded-md p-2 w-[250px] focus:outline-none ${customClassName || "border-gray-300 focus:border-black"} ${allowSearch ? "pl-10" : ""}`}
                    style={{ backgroundColor }}
                    pattern={pattern}
                    required={required}
                    list={list}
                />
            </div>

            {list && listoptions.length > 0 && (
                <datalist id={list}>
                    {listoptions.map((option, index) => (
                        <option key={index} value={option}></option>
                    ))}
                </datalist>)}
            {error && <label className="text-sm text-red-500">{error}</label>}
        </div>
    );
};