import { Loader, loaderDefaultProps } from "@modern-ui/components/Loader";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta: Meta<typeof Loader> = {
    component: Loader,
    title: "Design/Loader",
    argTypes: {},
    args: {
        ...loaderDefaultProps,
    },
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Basic: Story = {
    args: {},

    render: (args) => {
        return (
            <div>
                <div>
                    <Loader {...args} />
                </div>
                <div>
                    <Loader
                        {...args}
                        defaultSpinner="dots"
                    />
                </div>
            </div>
        );
    },
};

const CustomSpinner = () => {
    return <div>Loading...</div>;
};

export const WithCustomSpinner: Story = {
    render: (args) => {
        return (
            <>
                <Loader
                    {...args}
                    customLoadingSpinner={CustomSpinner}
                ></Loader>
            </>
        );
    },
};

export const Content: Story = {
    render: (args) => {
        return (
            <>
                <Loader {...args}>
                    <button>Some content</button>
                </Loader>
            </>
        );
    },
};
