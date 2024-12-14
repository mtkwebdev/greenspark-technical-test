<template>
  <div class="per-product-widgets-panel">
    <PanelComponent>
      <h3>Per Product Widgets</h3>
      <hr />
      <ProductWidgetsFeature />
    </PanelComponent>
  </div>
</template>

<script lang="ts" setup>
import PanelComponent from "@/components/visuals/PanelComponent/PanelComponent.vue";
import ProductWidgetsFeature from "@/features/Widgets/ProductWidget/ProductWidgetsFeature.vue";
import { useProductWidgetsStore } from "@/store/productWidgets/productWidgetsStore";

const store = useProductWidgetsStore();
const { populateWidgetList, populateWidgetTooltipContent } = store;

populateWidgetList();
populateWidgetTooltipContent();
</script>

<style lang="postcss" scoped>
.per-product-widgets-panel {
  display: flex;
  margin: 5rem auto;
  width: max-content;
  hr {
    color: var(--bg-grey);
    margin: 0.5rem 0rem 1.2rem 0rem;
  }
}
</style>
