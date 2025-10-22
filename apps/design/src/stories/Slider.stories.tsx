import { Slider, sliderDefaultProps, SLIDER_SIZES } from "@modern-ui/components/Slider";
import type { StoryObj, Meta } from "@storybook/vue3-vite";

const meta: Meta<typeof Slider> = {
    component: Slider,
    title: "Design/Slider",
    argTypes: {},
    args: {
        ...sliderDefaultProps,
    },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        value: 50,
    },

    render: (args) => {
        return (
            <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
                {SLIDER_SIZES.map((size) => {
                    return (
                        <Slider
                            {...args}
                            size={size}
                        />
                    );
                })}
            </div>
        );
    },
};

export const Vertical: Story = {
    args: {
        value: 50,
    },

    render: (args) => {
        return (
            <div style={{ display: "flex", gap: "4rem", width: "400px", height: "400px" }}>
                {SLIDER_SIZES.map((size) => {
                    return (
                        <Slider
                            {...args}
                            direction="vertical"
                            size={size}
                        />
                    );
                })}
            </div>
        );
    },
};
