import { Progress, progressDefaultProps } from "@modern-ui/components/Progress";
import { type Meta, type StoryObj } from "@storybook/vue3-vite";

const meta: Meta<typeof Progress> = {
    component: Progress,
    title: "Design/Progress",
    argTypes: {},
    args: {
        ...progressDefaultProps,
    },
};
export default meta;
type Story = StoryObj<typeof Progress>;
export const Basic: Story = {
    args: {
        value: 50,
    },
    render: (args) => (
        <>
            <Progress {...args} />
        </>
    ),
};

export const Vertical: Story = {
    args: {
        value: 50,
        direction: "vertical",
    },
    render: (args) => (
        <div style={{ height: "100vh" }}>
            <Progress {...args} />
        </div>
    ),
};
