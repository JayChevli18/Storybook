import { Input } from "./Input";
import { fn } from "@storybook/test";
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: "Jay/Input",
    component: Input,
    parameters: {
        layout: "centered"
    },
    tags: ['autodocs'],
    //Component Args -  defined args at the component level; they will apply to all the component's stories unless you overwrite them
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: { onChange: fn() }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultInput : Story= {
    args: {
        id:"inp",
        name:"inp",
        type: "text",
        placeholder: "Enter Your Text",       
    }
}

export const Disabled : Story= {
    args: {
        id:"inp",
        name:"inp",
        type: "text",
        placeholder: "Enter Your Text",       
        disabled: true
    }
}

export const WithLabel : Story= {
    args: {
        id:"inp",
        name:"inp",
        type: "email",
        placeholder: "Enter Your Text",       
        label:"Email"
    }
}

export const File : Story= {
    args: {
        id:"inp",
        name:"inp",
        type: "file",
        placeholder: "Upload Your File",       
    }
}


export const ReadOnly : Story= {
    args: {
        ...DefaultInput.args,
        value: "Default Value",
        disabled: true
    }
}

export const Validation : Story= {
    args: {
        id:"inp",
        name:"inp",
        type: "text",
        placeholder: "Enter Text",
        error: "Required",
        labelClassName:"text-red-500",
        label:"Validation",
        customClassName:"border-red-300 focus:border-red-600",
        asterick:true,
    }
}

export const Pattern : Story= {
    args: {
        id:"inp",
        name:"inp",
        type: "tel",
        placeholder: "123-45-678",
        pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
        error: "Required",
    }
}

export const Datalist: Story={
    args:{
        id: "list1",
        name:"list1",
        type:"text",
        placeholder:"Enter Text",
        list:"data-list",
        listoptions: ["Option 1", "Option 2", "Option 3"]
    }
}

export const SearchInput: Story={
    args:{
        id:"search",
        name:"search",
        type:"text",
        placeholder:"Search....",
        allowSearch:true,
        label:"Search",
        labelClassName:"text-blue-500"
    }
}