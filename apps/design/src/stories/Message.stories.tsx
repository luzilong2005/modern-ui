import { messageApi, MESSAGE_TYPES } from "@modern-ui/components/Message";
import type { StoryObj, Meta } from "@storybook/vue3-vite";
import { defineComponent } from "vue";

export default {
    title: "Design/Message",
    component: defineComponent({}),
} satisfies Meta;

type Story = StoryObj;
export const Preview: Story = {
    render: () => {
        return (
            <div style={{ display: "flex", gap: "2rem" }}>
                {MESSAGE_TYPES.map((type) => (
                    <button onClick={() => messageApi[type](type)}>{type}</button>
                ))}
            </div>
        );
    },
};
