import { CustomButton } from "./CustomButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta={
    title:"Jay/CustomButton",
    component: CustomButton,
    parameters:{
        layout: "centered"
    },
    tags: ['autodocs'],
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story=StoryObj<typeof meta>

export const DefaultButton: Story={
    args:{
        id:"btn1",
        name:"btn1",
        children:"Default",
        onClick: ()=>{alert("X")},
        size:"lg",
        variant:"rounded-outline-primary",
        rounded:'lg',
        icon: 'pencil',
        iconPosition:'right',
        gap:4
//        disabled: true,
        // icon:'<svg width="24" className="absolute left-2" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M8.071 21.586l-7.071 1.414 1.414-7.071 14.929-14.929 5.657 5.657-14.929 14.929zm-.493-.921l-4.243-4.243-1.06 5.303 5.303-1.06zm9.765-18.251l-13.3 13.301 4.242 4.242 13.301-13.3-4.243-4.243z"/></svg>'
    }
}