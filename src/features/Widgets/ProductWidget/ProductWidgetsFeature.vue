<template>
  <div
    v-if="store.productWidgetsListData.length"
    class="product-widgets-feature"
  >
    <div
      v-for="{
        id,
        type,
        amount,
        action,
        active,
        linked,
        selectedColor,
        tooltipLink,
        tooltipText,
      } in store.productWidgetsListData"
      :key="`product-widget-${id}`"
    >
      <ProductWidget
        :colour="selectedColor"
        :action="action"
        :amount="amount"
        :type="type"
      >
        <ProductWidgetSettings
          :id="id"
          :linked="linked"
          :selected-color="selectedColor"
          :active="active"
          :tooltip-link="tooltipLink"
          :tooltip-text="tooltipText"
        />
      </ProductWidget>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ProductWidget from "./ProductWidget.vue";
import ProductWidgetSettings from "@/features/Widgets/ProductWidget/ProductWidgetSettings/ProductWidgetSettings.vue";

import { useProductWidgetsStore } from "@/store/productWidgets/productWidgetsStore";

const store = useProductWidgetsStore();
</script>

<style lang="postcss" scoped>
.product-widgets-feature {
  display: flex;
  gap: 1rem;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
}
</style>
