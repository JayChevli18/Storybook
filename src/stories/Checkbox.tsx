import { DynamicIcon } from "lucide-react/dynamic";
import { twMerge } from "tailwind-merge";
import React from "react";


export interface CheckboxProp {
    id: string;
    name: string;
    label?: string;
    labelClassName?: string;
    asterick?: boolean;
    checkboxClassName?: string;
    isChecked?: boolean;
    checkboxSize?: 'sm' | 'md' | 'lg';
}


export const Checkbox = ({
    checkboxClassName,
    id,
    label, 
    labelClassName,
    name,
    asterick,
    checkboxSize='sm',
    isChecked 
}: CheckboxProp) => {

    const sizeStyle={
        'sm': 'w-4 h-4',
        'md': 'w-5 h-5',
        'lg': 'w-6 h-6'
    }[checkboxSize];

    const baseStyle = 'peer cursor-pointer transition-all appearance-none rounded-none border border-gray-500 dark:border-gray-600 checked:bg-blue-600 checked:dark:bg-gray-700 checked:border-blue-600 focus:ring focus:ring-blue-500 focus:ring-offset-2 focus:ring-[2px] focus:ring-offset-white dark:focus:ring-offset-gray-900 focus:outline-none';
    return (
        <div className="flex items-center gap-x-3 relative">
            <div className="flex items-start relative">
                <input type="checkbox"
                    className={twMerge(sizeStyle,baseStyle)}
                />
                <div className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none ">
                <>
                    <DynamicIcon name="check" width={14} height={14} className={
                        checkboxSize==='sm'?'size-4' : 
                        checkboxSize==='md'?'size-5' :
                        'size-6'
                    }></DynamicIcon>
                </>
                </div>
            </div>
            {
                label &&
                <label
                    className={`${labelClassName ? labelClassName :" text-sm font-medium text-gray-900"}`}
                >
                    {label}
                    {
                        asterick && <span className="text-red-500">*</span>
                    }
                </label>
            }
        </div>
    )
}