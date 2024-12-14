import { ref } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import "@/style.css";
import BadgeColourButtons from "@components/inputs/BadgeColourButtons/BadgeColourButtons.vue";

const meta: Meta<typeof BadgeColourButtons> = {
  component: BadgeColourButtons,
};

export default meta;
type Story = StoryObj<typeof BadgeColourButtons>;

export const Default: Story = {
  render: (args) => ({
    components: { BadgeColourButtons },
    setup() {
      const selectedColour = ref("blue");

      const setSelectedColour = (newValue: string) => {
        selectedColour.value = newValue;
      };
      return { args, setSelectedColour, selectedColour };
    },
    template:
      '<BadgeColourButtons v-bind="args" @colourSelected="setSelectedColour" :selectedColour="selectedColour"/>',
    tags: ["autodocs"],
  }),
};
