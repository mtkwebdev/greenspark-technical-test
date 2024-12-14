<template>
  <div class="checkbox-input-container">
    <BaseCheckbox v-model="model" :name="checkboxName" />
  </div>
</template>

<script lang="ts" setup>
import { useHtmlAttributeFormat } from "@/composables/formatters/formatters";
import BaseCheckbox from "../BaseCheckbox/BaseCheckbox.vue";

type CheckboxInputProps = {
  name: string;
};

const { name } = defineProps<CheckboxInputProps>();
const model = defineModel<boolean>();
const checkboxName = useHtmlAttributeFormat(name);
</script>

<style lang="postcss" scoped>
.checkbox-input-container {
  display: flex;
  user-select: none;
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  place-items: center;
  place-content: center;
  transition: all ease-in-out 0.2s;
  &:hover {
    background-color: var(--bg-light-green);
    opacity: 0.5;
  }

  & input[type="checkbox"] {
    position: relative;
    appearance: none;
    display: flex;
    align-content: center;
    justify-content: center;
    font-size: 2rem;
    width: 1.15rem;
    height: 1.15rem;
    border: 0.1rem solid var(--bg-black);
    border-radius: 0.2rem;
  }

  & input[type="checkbox"]::before {
    content: "";
    position: absolute;
    top: -0.09rem;
    width: 1.15rem;
    height: 1.15rem;
    transform: scale(0);
    background-color: var(--bg-green);
    border-radius: 0.2rem;
  }

  & input[type="checkbox"]:checked::before {
    transform: scale(1);
  }
  & input[type="checkbox"]:checked::after {
    content: "";
    position: absolute;
    display: inline-block;
    transform: rotate(45deg);
    top: 0.099rem;
    height: 0.6rem;
    width: 0.3rem;
    border-bottom: 0.125rem solid var(--bg-dark-white);
    border-right: 0.125rem solid var(--bg-dark-white);
  }
}
</style>
