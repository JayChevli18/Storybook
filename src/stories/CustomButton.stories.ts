import { CustomButton } from "./CustomButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta={
    title:"Jay/CustomButton",
    component: CustomButton,
    
    parameters:{
        layout: "centered",
        // backgrounds: {
        //     default: "dark",
        //     values: [
        //         { name: "light", value: "#ffffff" },
        //         { name: "dark", value: "#333333" },
        //     ],
        // },
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
        onClick: ()=>{alert("Default")},
        theme: 'dark',
        // size:"lg",
        // variant:"rounded-outline-primary",
        // rounded:'lg',
        // icon: 'pencil',
        // iconPosition:'right',
        // gap:4
//        disabled: true,
        // icon:'<svg width="24" className="absolute left-2" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M8.071 21.586l-7.071 1.414 1.414-7.071 14.929-14.929 5.657 5.657-14.929 14.929zm-.493-.921l-4.243-4.243-1.06 5.303 5.303-1.06zm9.765-18.251l-13.3 13.301 4.242 4.242 13.301-13.3-4.243-4.243z"/></svg>'
    },
}

export const PrimaryButton: Story={
    args:{
        id:"btn2",
        name:"btn2",
        children: "Primary",
        onClick: ()=>{alert("Primary")},
        variant: "primary"
    }
}

export const OutlinePrimaryButton: Story={
    args:{
        id:"btn2",
        name:"btn2",
        children: "Outline Primary",
        onClick: ()=>{alert("Outline Primary")},
        variant: "outline-primary",
        theme: 'dark',

    }
}

export const SecondaryButton: Story={
    args:{
        id:"btn3",
        name:"btn3",
        children: "Secondary",
        onClick: ()=>{alert("Secondary")},
        variant: "secondary"
    }
}


export const OutlineSecodaryButton: Story={
    args:{
        id:"btn4",
        name:"btn4",
        children: "Outline Secondary",
        onClick: ()=>{alert("Outline Secondary")},
        variant: "outline-secondary"
    }
}


export const RoundedVariants: Story={
    args:{
        id:"btn5",
        name:"btn5",
        children: "Outline Secondary",
        onClick: ()=>{alert("RoundedVariants")},
        variant: "rounded-outline-primary",
        rounded: "xl"    
    }
}

export const CustomSizeButton: Story={
    args:{
        id:"btn6",
        name:"btn6",
        children: "Sizes",
        onClick: ()=>{alert("CustomSizeButton")},
        variant: "primary",
        size: "xl"  
    }
}


export const Scale: Story={
    args:{
        id:"btn7",
        name:"btn7",
        children: "Scale Animation",
        onClick: ()=>{alert("Scale Animation")},
        variant: "rounded-outline-primary",
        scale:true,
        rounded: "xl"    
    }
}

export const IconButton: Story={
    args:{
        id:"btn8",
        name:"btn8",
        children: "Icon Button",
        onClick: ()=>{alert("IconButton")},
        variant: "rounded-outline-primary",
        rounded: "md",
        icon:"pencil",
        iconPosition:"left"
    }
}

export const DisabledButton: Story={
    args:{
        ...PrimaryButton.args,
        disabled:true
    }
}