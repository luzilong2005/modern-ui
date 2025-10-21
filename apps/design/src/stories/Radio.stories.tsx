import { Radio, RADIO_SIZES, radioDefaultProps } from "@modern-ui/components/Radio";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta = {
    title: "Design/Radio",
    component: Radio,
    argTypes: {},
    args: {
        ...radioDefaultProps,
    },
} satisfies Meta<typeof Radio>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Basic: Story = {
    args: {
        disabled: false,
        defaultChecked: false,
    },

    render: (args) => {
        return (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {RADIO_SIZES.map((size) => (
                    <Radio
                        {...args}
                        size={size}
                        label="Option"
                    />
                ))}
            </div>
        );
    },
};

export const UseGroup: Story = {
    render: () => {
        return (
            <Radio.Group
                name="RadioGroup"
                style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
                <Radio
                    label="Option-1"
                    value="Option-1"
                />
                <Radio
                    label="Option-2"
                    value="Option-2"
                />
                <Radio
                    label="Option-3"
                    value="Option-3"
                />
            </Radio.Group>
        );
    },
};
