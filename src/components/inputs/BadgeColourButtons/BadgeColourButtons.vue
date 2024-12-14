<template>
  <div class="badge-colour-buttons-container">
    <div
      v-for="colour in COLOURS"
      :key="`badge-${colour}-button-${componentUniqueId}`"
    >
      <BadgeColourButton
        :colour="colour"
        :is-selected="colour === selectedColour"
        @click="$emit('colourSelected', colour)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { v4 as uuidv4 } from "uuid";
import { COLOURS } from "@/enums/colours.ts";

// Import Components
import BadgeColourButton from "./BadgeColourButton.vue";

// Import Types
import { type WidgetSelectedColor } from "@/types/productWidgets/types.ts";

type BadgeColourButtonsProps = { selectedColour: WidgetSelectedColor };

// Emits
defineEmits(["colourSelected"]);

// PROPS
const { selectedColour } = defineProps<BadgeColourButtonsProps>();

const componentUniqueId = uuidv4();
</script>

<style lang="postcss" scoped>
.badge-colour-buttons-container {
  display: flex;
  column-gap: 0.25rem;
}
</style>
