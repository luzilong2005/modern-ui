import { Checkbox, CHECKBOX_SIZES, checkboxDefaultProps } from "@modern-ui/components/Checkbox";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta = {
    title: "Design/Checkbox",
    component: Checkbox,
    argTypes: {},
    args: {
        ...checkboxDefaultProps,
    },
} satisfies Meta<typeof Checkbox>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Basic: Story = {
    args: {},

    render: (args) => {
        return (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {CHECKBOX_SIZES.map((size) => (
                    <Checkbox
                        {...args}
                        size={size}
                        label="Checkbox"
                    />
                ))}
            </div>
        );
    },
};

export const UseGroup: Story = {
    args: {
        disabled: false,
    },

    render: (args) => {
        const options = [
            { label: "Vue", value: "Vue" },
            { label: "React", value: "React" },
            { label: "Angular", value: "Angular" },
        ];
        return (
            <Checkbox.Group style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {options.map((option) => (
                    <Checkbox
                        {...args}
                        {...option}
                    />
                ))}
            </Checkbox.Group>
        );
    },
};
