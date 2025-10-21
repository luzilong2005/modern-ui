import { Input, inputDefaultProps } from "@modern-ui/components/Input";
import { type Meta, type StoryObj } from "@storybook/vue3-vite";
import { UserIcon } from "lucide-vue-next";

const meta: Meta<typeof Input> = {
    component: Input,
    title: "Design/Input",
    argTypes: {},
    args: {
        ...inputDefaultProps,
    },
};
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: {
        placeholder: "Hello",
    },
    render: (args) => {
        const Prefix = () => (
            <>
                <UserIcon
                    color="gray"
                    size={20}
                />
            </>
        );

        const Suffix = () => (
            <>
                <button>C</button>
            </>
        );

        return (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "20rem" }}>
                <Input
                    {...args}
                    label="输入"
                />
                <Input
                    {...args}
                    label="输入"
                >
                    {{
                        prefix: Prefix,
                        suffix: Suffix,
                    }}
                </Input>
                <Input
                    {...args}
                    label="输入"
                >
                    {{
                        prefix: Prefix,
                    }}
                </Input>
                <Input
                    {...args}
                    label="输入"
                >
                    {{
                        suffix: Suffix,
                    }}
                </Input>
            </div>
        );
    },
};
