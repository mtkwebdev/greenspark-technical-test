<template>
  <button
    type="button"
    class="colour-button"
    :class="dynamicClasses"
    :style="backgroundColour"
    @click.stop="$emit('click')"
  ></button>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { type WidgetSelectedColor } from "@/types/productWidgets/types.ts";

type BadgeColourButtonProps = {
  isSelected: boolean;
  colour: WidgetSelectedColor;
};

// EMITS
defineEmits(["click"]);

// PROPS
const { isSelected, colour } = defineProps<BadgeColourButtonProps>();

// COMPUTED PROPERTIES
const backgroundColour = computed(() => {
  return `background-color: var(--bg-${colour})`;
});
const dynamicClasses = computed(() => {
  const selected = isSelected ? "selected" : "";
  return [selected];
});
</script>

<style lang="postcss" scoped>
.colour-button {
  width: 1rem;
  height: 1rem;
  object-fit: contain;
  box-shadow: inset 0rem 0rem 0rem 0rem var(--border-grey);
  transition: box-shadow ease-in-out 0.1s;

  &.selected {
    box-shadow: inset 0rem 0rem 0rem 0.1rem var(--border-grey);
    transition: box-shadow ease-in-out 0.1s;
  }

  &:hover {
    opacity: 0.8;
  }
}
</style>
