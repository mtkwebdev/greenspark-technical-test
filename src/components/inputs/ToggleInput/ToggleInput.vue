<template>
  <div class="toggle-input-container">
    <BaseCheckbox v-model="model" :name="checkboxName" />
  </div>
</template>

<script lang="ts" setup>
import { useHtmlAttributeFormat } from "@/composables/formatters/formatters";
import BaseCheckbox from "../BaseCheckbox/BaseCheckbox.vue";

type ToggleInputProps = {
  name: string;
};

const { name } = defineProps<ToggleInputProps>();
const model = defineModel<boolean>({ default: false });
const checkboxName = useHtmlAttributeFormat(name);
</script>

<style lang="postcss" scoped>
/* PostCSS chosen here for code clarity -  */
.toggle-input-container {
  position: relative;
  left: 0;
  display: flex;
  user-select: none;
  cursor: pointer;
  transition: all ease-in-out 0.1s;
  width: 2.5rem;

  &:hover {
    & input[type="checkbox"]::after {
      transition: box-shadow ease-in-out 0.1s;
      box-shadow:
        0rem 0rem 0.0856rem 0rem rgba(0, 0, 0, 0.35),
        0rem 0rem 0rem 0.35rem var(--shadow-colour-light-green);
    }
  }

  & input[type="checkbox"] {
    appearance: none;
  }

  & input[type="checkbox"]::before {
    content: "";
    position: absolute;
    width: 2.5rem;
    height: 1.25rem;
    border: solid 0.0369rem var(--bg-light-green);
    border-radius: 2.125rem;
    box-shadow: inset 0rem 0.055rem 0.4275rem 0rem rgba(0, 0, 0, 0.15);
    background-color: var(--bg-dark-white);
    transition: all ease-in-out 0.1s;
  }
  & input[type="checkbox"]:checked::before {
    content: "";
    position: absolute;
    border-color: var(--bg-grey);
    background-color: var(--bg-green);
    transition: all ease-in-out 0.1s;
  }

  & input[type="checkbox"]::after {
    content: "";
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border: solid 0.0369rem var(--bg-beige);
    border-radius: 100%;
    background-color: var(--bg-dark-white);
    transition: box-shadow ease-in-out 0.1s;
    box-shadow: 0rem 0rem 0.0856rem 0rem rgba(0, 0, 0, 0.35);
    transform: translateX(0rem);
    transition: all ease-in-out 0.1s;
  }
  & input[type="checkbox"]:checked::after {
    content: "";
    position: absolute;
    display: inline-block;
    border: solid 0.0369rem var(--bg-green);
    transform: translateX(1.25rem);
    transition: all ease-in-out 0.1s;
  }
}
</style>
