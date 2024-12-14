<template>
  <input
    :id="checkboxName"
    v-model="model"
    :name="checkboxName"
    :true-value="true"
    :false-value="false"
    type="checkbox"
  />
</template>

<script lang="ts" setup>
import { useHtmlAttributeFormat } from "@/composables/formatters/formatters";

type BaseCheckboxProps = {
  name: string;
};

const { name } = defineProps<BaseCheckboxProps>();
const model = defineModel<boolean>();
const checkboxName = useHtmlAttributeFormat(name);
</script>
