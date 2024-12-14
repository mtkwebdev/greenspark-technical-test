<template>
  <div class="product-widget-container">
    <div class="product-widget" :style="dynamicStyles">
      <LogoSVG :fill="colourSwitcher" />
      <div class="widget-text">
        <h6>This product {{ action }}</h6>
        <h5>{{ dynamicAmountAndTypeText }}</h5>
      </div>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import LogoSVG from "@components/visuals/LogoSVG/LogoSVG.vue";

// Import Types
import {
  type WidgetAction,
  type WidgetAmount,
  type WidgetSelectedColor,
  type WidgetType,
} from "@/types/productWidgets/types";

type ProductWidgetProps = {
  readonly colour: WidgetSelectedColor;
  readonly action: WidgetAction;
  readonly amount: WidgetAmount;
  readonly type: WidgetType;
};

// PROPS
const { colour, action, amount, type } = defineProps<ProductWidgetProps>();

// COMPUTED PROPERTIES
const dynamicStyles = computed(() => {
  return [
    `background-color:var(--bg-${colour})`,
    `color: var(--bg-${colourSwitcher.value})`,
  ];
});

const isLightVariant = computed(() => {
  return colour === "beige" || colour === "white";
});

const colourSwitcher = computed(() => {
  return isLightVariant.value ? "green" : "white";
});

const dynamicAmountAndTypeText = computed(() => {
  if (type === "plastic") {
    return `${amount} ${type} bottles`;
  }
  if (type === "carbon") {
    return `${amount}kgs of ${type}`;
  } else {
    return `${amount} ${type}`;
  }
});
</script>

<style lang="postcss" scoped>
.product-widget-container {
  display: flex;
  flex-direction: column;
  width: 13.8325rem;

  .product-widget {
    display: flex;
    height: 4.125rem;
    border-radius: 0.3719rem;
    padding: 0.5rem;
    align-items: center;
    color: var(--dynamic-font-colour);
    column-gap: 0.75rem;
    .widget-text {
      display: flex;
      flex-direction: column;
      row-gap: 0.2481rem;
    }
    & svg {
      fill: var(--dynamic-svg-fill);
    }
  }
}
</style>
