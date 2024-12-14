import type { Meta, StoryObj } from "@storybook/vue3";
import "@/style.css";
import PanelComponent from "@components/visuals/PanelComponent/PanelComponent.vue";

const meta: Meta<typeof PanelComponent> = {
  component: PanelComponent,
};

export default meta;
type Story = StoryObj<typeof PanelComponent>;

export const Default: Story = {
  render: (args) => ({
    components: { PanelComponent },
    setup() {
      return { args };
    },
    template: `<PanelComponent v-bind="args">
        <h3>Panel heading</h3>
        <br/>
        <hr>
        <br/>
        <p>Panel content is added via a default slot...</p>
        <p>So remember! you'll need to set gaps, paddings, and margins for content!</p>
      </PanelComponent>`,
    tags: ["autodocs"],
  }),
  args: {},
};
