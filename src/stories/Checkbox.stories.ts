import { Checkbox } from "./Checkbox";
import type { Meta, StoryObj } from "@storybook/react";

const meta={
    title:"Jay/Checkbox",
    component:Checkbox,
    parameters:{
        layout:"centered"
    },
    tags:['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story=StoryObj<typeof meta>

export const Default: Story={
    args:{
        id:"c1",
        name:"c1",
        checkboxSize:"md",
    }
}

export const WithLabel: Story={
    args:{
        ...Default.args,
        label:"Checkbox",
        asterick: true,
        labelClassName:"text-gray-900 text-md font-normal"
    }
}