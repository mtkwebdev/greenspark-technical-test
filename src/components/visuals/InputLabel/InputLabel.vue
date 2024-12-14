<template>
  <label :for="formattedForAttribute"> <slot></slot></label>
</template>

<script lang="ts" setup>
import { useHtmlAttributeFormat } from "@/composables/formatters/formatters";

type InputLabelProps = {
  labelFor: string;
};

// PROPS
const { labelFor } = defineProps<InputLabelProps>();
const formattedForAttribute = useHtmlAttributeFormat(labelFor);
</script>

<style lang="postcss" scoped>
label {
  color: var(--bg-green);
  font-size: 0.875rem;
}
</style>
