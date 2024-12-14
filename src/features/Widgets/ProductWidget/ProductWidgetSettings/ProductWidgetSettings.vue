<template>
  <div class="widget-settings-container">
    <ProductWidgetSettingLinkedField
      :id="id"
      :linked="linked"
      :tooltip-link="tooltipLink"
      :tooltip-text="tooltipText"
    />

    <ProductWidgetSettingField>
      <InputLabel :label-for="badgeColourText">
        {{ badgeColourText }}
      </InputLabel>
      <BadgeColourButtons
        :selected-colour="selectedColor"
        @colour-selected="setSelectedColour"
      />
    </ProductWidgetSettingField>

    <ProductWidgetSettingField>
      <InputLabel :label-for="activateBadgeText">
        {{ activateBadgeText }}
      </InputLabel>
      <ToggleInput
        :name="activateBadgeText"
        :model-value="active"
        @update:model-value="setWidgetActive"
      />
    </ProductWidgetSettingField>
  </div>
</template>

<script lang="ts" setup>
// Import Pinia State
import { useProductWidgetsStore } from "@/store/productWidgets/productWidgetsStore";

// Import Components
import InputLabel from "@components/visuals/InputLabel/InputLabel.vue";
import BadgeColourButtons from "@components/inputs/BadgeColourButtons/BadgeColourButtons.vue";
import ToggleInput from "@components/inputs/ToggleInput/ToggleInput.vue";
import ProductWidgetSettingField from "./ProductWidgetSettingField.vue";
import ProductWidgetSettingLinkedField from "./ProductWidgetSettingLinkedField.vue";

// Import Types
import {
  type ProductWidgetSettingsProps,
  type WidgetSelectedColor,
  type WidgetActive,
} from "@/types/productWidgets/types";

const badgeColourText = "Badge colour";
const activateBadgeText = "Activate badge";

// PROPS
const { id, linked, selectedColor, active, tooltipLink, tooltipText } =
  defineProps<ProductWidgetSettingsProps>();

// NOTE: only destructure pina actions, not pinia state or getters.
const store = useProductWidgetsStore();
const { setActiveWidgetById, setWidgetColourById } = store; // pinia actions

// METHODS
const setSelectedColour = (colour: WidgetSelectedColor) => {
  setWidgetColourById(id, colour);
};
const setWidgetActive = (isActive: WidgetActive) => {
  setActiveWidgetById(id, isActive);
};
</script>
<style lang="postcss" scoped>
.widget-settings-container {
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 0.625rem;
  margin-bottom: 1rem;
}
</style>
