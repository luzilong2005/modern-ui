import {
    Button,
    buttonDefaultProps,
    BUTTON_SIZES,
    BUTTON_VARIANTS,
    BUTTON_COLOR_TYPES,
} from "@modern-ui/components/Button";
import type { StoryObj, Meta } from "@storybook/vue3-vite";
import { ArrowLeftIcon, ArrowRightIcon, UserIcon } from "lucide-vue-next";
import { h } from "vue";

const meta: Meta<typeof Button> = {
    title: "Design/Button",
    component: Button,
    argTypes: {},
    args: {
        ...buttonDefaultProps,
    },
};
type Story = StoryObj<typeof meta>;
export default meta;

export const Basic: Story = {
    args: {},
    render: (args) => {
        return (
            <div>
                <Button {...args}>Button</Button>
            </div>
        );
    },
};

export const Sizes: Story = {
    args: {},
    render: (args) => {
        return (
            <div style={{ display: "flex", gap: "1rem" }}>
                {BUTTON_SIZES.map((size) => (
                    <Button
                        {...args}
                        size={size}
                    >
                        Button
                    </Button>
                ))}
            </div>
        );
    },
};

export const IconButton: Story = {
    args: {
        icon: h(UserIcon, { size: 20 }),
    },
    render: (args) => {
        return (
            <div style={{ display: "flex", gap: "1rem" }}>
                {BUTTON_SIZES.map((size) => (
                    <Button
                        {...args}
                        size={size}
                    />
                ))}
            </div>
        );
    },
};

export const Variants: Story = {
    args: {},
    render: (args) => {
        return (
            <div style={{ display: "flex", gap: "1rem" }}>
                {BUTTON_VARIANTS.map((variant) => {
                    return (
                        <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
                            {BUTTON_COLOR_TYPES.map((color) => (
                                <Button
                                    {...args}
                                    variant={variant}
                                    colorType={color}
                                >
                                    Button
                                </Button>
                            ))}
                        </div>
                    );
                })}
            </div>
        );
    },
};

export const WithSection: Story = {
    args: {},
    render: (args) => {
        const Default = () => <div>Button</div>;
        const Left = () => <ArrowLeftIcon size={20} />;
        const Right = () => <ArrowRightIcon size={20} />;
        return (
            <div>
                <Button {...args}>{{ default: Default, leftSection: Left, rightSection: Right }}</Button>
            </div>
        );
    },
};
