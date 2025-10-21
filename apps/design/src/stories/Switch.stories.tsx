import { Switch, SWITCH_SIZES, switchDefaultProps } from "@modern-ui/components/Switch";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta = {
    title: "Design/Switch",
    component: Switch,
    argTypes: {},
    args: {
        ...switchDefaultProps,
    },
} satisfies Meta<typeof Switch>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Basic: Story = {
    args: {
        disabled: false,
    },

    render: (args) => {
        return (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {SWITCH_SIZES.map((size) => (
                    <Switch
                        {...args}
                        size={size}
                        label={"Toggle"}
                    />
                ))}
            </div>
        );
    },
};
