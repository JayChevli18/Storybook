import React from "react";
import "../app/globals.css";
import { twMerge } from "tailwind-merge";
import { DynamicIcon } from "lucide-react/dynamic";
//import type { IconNames } from "lucide-react";

export interface CustomButtonProp {
    id: string;
    name: string;
    children: string;
    disabled?: boolean;
    size?: 'md' | 'lg' | 'sm' | 'xl';
    variant?: 'default' | 'primary' | 'outline-primary' | 'secondary' | 'outline-secondary' | 'rounded-primary' | 'rounded-outline-primary';
    rounded?: 'md' | 'lg' | 'sm' | 'xl' | '2xl';
    icon?: string;
    iconPosition?: 'left' | 'right';
    gap?: number;
    onClick?: () => void;
    className?: string;
    scale?: boolean;

}

export const CustomButton = ({
    id,
    name,
    size = 'lg',
    children,
    onClick,
    rounded = 'sm',
    variant = 'default',
    disabled = false,
    scale,
    icon,
    iconPosition = 'left',
    gap,
    className
}: CustomButtonProp) => {

    const sizeStyle = {
        none: '',
        sm: 'pt-2 pb-2 pl-3 pr-3',
        md: 'pt-3 pb-3 pl-4 pr-4',
        lg: 'pt-3 pb-3 pl-6 pr-6',
        xl: 'pt-4 pb-4 pl-8 pr-8'
    }


    const variantStyle = {
        default: 'bg-none font-semibold dark:text-white dark: bg-black',
        primary: 'bg-black text-white dark: text-white font-semibold dark:bg-black',
        'outline-primary': 'bg-white border font-semibold border-black dark:border dark:border-white dark:text-white dark:bg-white',
        'secondary': 'bg-gray-300 font-semibold text-black border border-gray-500 dark:bg-gray-100 dark:text-white dark:border dark:border-gray-300',
        'outline-secondary': 'bg-white font-semibold text-gray-500 border border-gray-400  ',
        'rounded-primary': `bg-black text-white dark: text-white font-semibold dark:bg-black rounded-${rounded}`,
        'rounded-outline-primary': `bg-white border font-semibold border-black dark:border dark:border-white dark:text-white dark:bg-white rounded-${rounded}`,
    }

    const baseScaleStyle = 'transition-all transform hover:scale-x-105 hover:scale-y-105';

    const baseIconStyle = `flex items-center ${gap ? `gap-${gap}` : 'gap-2'}`;

    const combinedStyles = twMerge(
        sizeStyle[size as keyof typeof sizeStyle],
        variantStyle[variant as keyof typeof variantStyle],
        scale ? baseScaleStyle : '',
        icon ? baseIconStyle : '',
    )

    return (
        <button
            id={id}
            name={name}
            onClick={onClick}
            className={` ${disabled ? "hover:cursor-not-allowed" : ""}  || ${className} ||  ${combinedStyles}  `}
            disabled={disabled}
        >
            {icon && iconPosition === 'left' && <DynamicIcon name={icon as any} size={20} />}
            {children}
            {icon && iconPosition === 'right' && <DynamicIcon name={icon as any} size={20} />}
        </button>
    )
}