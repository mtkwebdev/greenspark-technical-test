import type { Meta, StoryObj } from "@storybook/vue3";
import "@/style.css";
import WidgetTooltip from "@components/visuals/WidgetTooltip/WidgetTooltip.vue";

const meta: Meta<typeof WidgetTooltip> = {
  component: WidgetTooltip,
};

export default meta;
type Story = StoryObj<typeof WidgetTooltip>;

export const Default: Story = {
  render: (args) => ({
    components: { WidgetTooltip },
    setup() {
      const tooltipText =
        "This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.";
      return { args, tooltipText };
    },
    template: `
    <div style="background-color: beige; width: 22rem; height: 14rem; padding: 1rem">
    <label>A label for some input </label>
      <WidgetTooltip v-bind="args">
      <p>{{tooltipText}}</p>
      <a href="#" rel="noopener noreferrer" target="_blank" style="display:flex; place-self: center;">View Public Profile</a>
      </WidgetTooltip>
    </div>
    `,
    tags: ["autodocs"],
  }),
};
