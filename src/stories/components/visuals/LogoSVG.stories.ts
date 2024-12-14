import type { Meta, StoryObj } from "@storybook/vue3";
import "@/style.css";
import LogoSVG from "@components/visuals/LogoSVG/LogoSVG.vue";

const meta: Meta<typeof LogoSVG> = {
  component: LogoSVG,
};

export default meta;
type Story = StoryObj<typeof LogoSVG>;

export const Default: Story = {
  render: (args) => ({
    components: { LogoSVG },
    setup() {
      return { args };
    },
    template: `
      <div style="width: 5rem;">
        <div style="background-color: white; margin-top: 1rem; padding:1rem">
        <LogoSVG v-bind="args" fill="green"></LogoSVG>
        </div>
        <div style="background-color: black; margin-top: 1rem; padding:1rem">
          <LogoSVG v-bind="args" fill="white"></LogoSVG>
        </div>
      </div>
    `,
    tags: ["autodocs"],
  }),
  args: {},
};
