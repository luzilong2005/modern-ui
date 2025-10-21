import { Tooltip, tooltipDefaultProps } from "@modern-ui/components/Tooltip";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta = {
    title: "Design/Tooltip",
    component: Tooltip,
    argTypes: {},
    args: {
        ...tooltipDefaultProps,
    },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Preview: Story = {
    render: () => {
        return (
            <div>
                <Tooltip content="hello">
                    <button>Click</button>
                </Tooltip>
            </div>
        );
    },
};
