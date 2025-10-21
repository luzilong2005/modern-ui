import { Alert, ALERT_COLOR_TYPES, ALERT_VARIANTS, alertDefaultProps } from "@modern-ui/components/Alert";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { CircleCheckBigIcon } from "lucide-vue-next";

const meta: Meta<typeof Alert> = {
    title: "Design/Alert",
    component: Alert,
    argTypes: {},
    args: {
        ...alertDefaultProps,
    },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        title: "Alert Title",
        content: "This is a basic alert.",
    },
    render: (args) => {
        return (
            <>
                <Alert {...args}></Alert>
            </>
        );
    },
};

export const VariantsAndColors: Story = {
    render: (args) => {
        return (
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {ALERT_COLOR_TYPES.map((cy) => (
                    <div style={{ display: "flex", gap: "2rem" }}>
                        {ALERT_VARIANTS.map((variant) => (
                            <Alert
                                {...args}
                                variant={variant}
                                colorType={cy}
                                content="This is a basic alert. Using the variant and color type props."
                                title="Basic Alert"
                            />
                        ))}
                    </div>
                ))}
            </div>
        );
    },
};

export const CustomIcon: Story = {
    args: {
        icon: CircleCheckBigIcon,
        title: "Title",
        content: "This is a basic alert, With a custom icon.",
    },
    render: (args) => {
        return (
            <div>
                <Alert {...args} />
            </div>
        );
    },
};
