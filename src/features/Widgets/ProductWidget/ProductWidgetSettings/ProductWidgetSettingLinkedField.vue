<template>
  <ProductWidgetSettingField>
    <span class="widget-linked-setting">
      <InputLabel label-for="linked input">Link to Public Profile</InputLabel>
      <WidgetTooltip v-if="tooltipText && tooltipLink">
        <p>{{ tooltipText }}</p>
        <a
          :href="tooltipLink?.href"
          rel="noopener noreferrer"
          target="_blank"
          >{{ tooltipLink?.text }}</a
        >
      </WidgetTooltip>
    </span>

    <CheckboxInput
      name="linked input"
      :model-value="linked"
      @update:model-value="setWidgetLinked"
    />
  </ProductWidgetSettingField>
</template>

<script lang="ts" setup>
// Import Pinia State
import { useProductWidgetsStore } from "@/store/productWidgets/productWidgetsStore";

// Import Components
import WidgetTooltip from "@components/visuals/WidgetTooltip/WidgetTooltip.vue";
import InputLabel from "@components/visuals/InputLabel/InputLabel.vue";
import CheckboxInput from "@components/inputs/CheckboxInput/CheckboxInput.vue";
import ProductWidgetSettingField from "./ProductWidgetSettingField.vue";

// Import Types
import {
  type WidgetId,
  type WidgetLinked,
  type TooltipLink,
  type TooltipText,
} from "@/types/productWidgets/types";

interface ProductWidgetLinkedSettingFieldProps {
  id: WidgetId;
  linked: WidgetLinked;
  tooltipLink: TooltipLink;
  tooltipText: TooltipText;
}

// PROPS
const { id, linked, tooltipLink, tooltipText } =
  defineProps<ProductWidgetLinkedSettingFieldProps>();

// NOTE: only destructure pina actions, not pinia state or getters.
const store = useProductWidgetsStore();
const { setWidgetLinkedById } = store; // pinia actions

// METHODS
const setWidgetLinked = (isLinked: WidgetLinked) => {
  setWidgetLinkedById(id, isLinked);
};
</script>

<style lang="postcss" scoped>
.widget-linked-setting {
  position: relative;
  z-index: var(--z-index-tooltip);
  align-self: center;
}
</style>
