<template>
  <div class="panel-component-container">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="postcss" scoped>
.panel-component-container {
  display: flex;
  flex: 1 1 100%;
  flex-direction: column;
  padding: 2.25rem;
  background-color: var(--bg-dark-white);
  box-shadow: var(--panel-shadow);
  border-radius: 0.5rem;
}
</style>
