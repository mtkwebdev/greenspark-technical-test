import type { Meta, StoryObj } from "@storybook/vue3";
import "@/style.css";
import InputLabel from "@components/visuals/InputLabel/InputLabel.vue";

const meta: Meta<typeof InputLabel> = {
  component: InputLabel,
};

export default meta;
type Story = StoryObj<typeof InputLabel>;

export const Default: Story = {
  render: (args) => ({
    components: { InputLabel },
    setup() {
      return { args };
    },
    template:
      '<InputLabel v-bind="args">This is a label for an input within a widget</InputLabel>',
    tags: ["autodocs"],
  }),
  args: {},
};
