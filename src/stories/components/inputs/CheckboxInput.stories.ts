import type { Meta, StoryObj } from "@storybook/vue3";
import "@/style.css";
import CheckboxInput from "@components/inputs/CheckboxInput/CheckboxInput.vue";

const meta: Meta<typeof CheckboxInput> = {
  component: CheckboxInput,
};

export default meta;
type Story = StoryObj<typeof CheckboxInput>;

export const Default: Story = {
  render: (args) => ({
    components: { CheckboxInput },
    setup() {
      return { args };
    },
    template: '<CheckboxInput v-bind="args" />',
    tags: ["autodocs"],
  }),
  args: {
    name: "checkbox-input",
  },
};
