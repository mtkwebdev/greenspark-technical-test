import type { Meta, StoryObj } from "@storybook/vue3";
import "@/style.css";
import ToggleInput from "@components/inputs/ToggleInput/ToggleInput.vue";

const meta: Meta<typeof ToggleInput> = {
  component: ToggleInput,
};

export default meta;
type Story = StoryObj<typeof ToggleInput>;

export const Default: Story = {
  render: (args) => ({
    components: { ToggleInput },
    setup() {
      return { args };
    },
    template: '<ToggleInput v-bind="args" />',
    tags: ["autodocs"],
  }),
  args: {
    name: "toggle-input",
  },
};
