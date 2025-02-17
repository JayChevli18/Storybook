import React from "react"
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
    onChange?: () => void;
    error?: string;
    pattern?: string;
    list?: string;
    listoptions?: string[];
    customClassName?: string;
    allowSearch?: boolean;
    asterick?:boolean;
}


export const Input = ({ label,labelClassName ,placeholder, type, value, disabled, backgroundColor, error, pattern, list, listoptions = [], customClassName, allowSearch, asterick }: InputProps) => {
    return (
        <div className="grid w-full items-center gap-1.5">
            <div className="flex">
            {label && <label className={`${labelClassName || "text-blue-500 "} text-sm font-medium`}>{label}</label>}
            {
                asterick && <label className="text-red-600 relative bottom-1 font-bold ">*</label>
            }
          </div>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                className={`border rounded-md p-2 w-[250px] focus:outline-none ${customClassName || "border-gray-300 focus:border-black"}`}
                style={{ backgroundColor }}
                pattern={pattern}
                required={!!error}
                list={list}
            />
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